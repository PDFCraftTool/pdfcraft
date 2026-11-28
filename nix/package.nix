{ lib
, stdenv
, nodejs_22
, cacert
, gzip
, nginx
, staticHash ? "sha256-AIIyALDKn6920A1Po3INkO7bklktL9CXwmRjsJz/y+Y="
}:

let
  nodejs = nodejs_22;

  # Phase 1: Fetch npm dependencies (fixed-output derivation)
  npmDeps = stdenv.mkDerivation {
    pname = "pdfcraft-npm-deps";
    version = "0.1.0";

    src = lib.cleanSourceWith {
      src = ./..;
      filter = path: type:
        let baseName = baseNameOf path; in
        baseName == "package.json" || baseName == "package-lock.json";
    };

    nativeBuildInputs = [ nodejs cacert ];

    buildPhase = ''
      export HOME=$TMPDIR
      export npm_config_cache=$TMPDIR/.npm
      npm ci --ignore-scripts --cache $TMPDIR/.npm
    '';

    installPhase = ''
      cp -r node_modules $out
    '';

    outputHashMode = "recursive";
    outputHashAlgo = "sha256";
    outputHash = "";
  };

  # Phase 2: Build the static site (FOD — allows network for next/font Google Fonts download)
  pdfcraft-static = stdenv.mkDerivation {
    pname = "pdfcraft-static";
    version = "0.1.0";

    src = lib.cleanSourceWith {
      src = ./..;
      filter = path: type:
        let baseName = baseNameOf path; in
        !(
          baseName == ".git" ||
          baseName == ".next" ||
          baseName == "out" ||
          baseName == "node_modules" ||
          baseName == "result" ||
          baseName == ".vercel" ||
          baseName == "coverage" ||
          baseName == ".idea" ||
          baseName == ".vscode" ||
          baseName == ".agent" ||
          baseName == ".kiro" ||
          baseName == "bentopdf-main" ||
          baseName == "nix" ||
          baseName == "flake.nix" ||
          baseName == "flake.lock"
        );
    };

    nativeBuildInputs = [ nodejs cacert ];

    NODE_OPTIONS = "--max-old-space-size=4096";
    NEXT_TELEMETRY_DISABLED = "1";

    configurePhase = ''
      export HOME=$TMPDIR
      export npm_config_cache=$TMPDIR/.npm

      # Install deps without scripts (canvas native module not needed)
      npm ci --ignore-scripts

      # Fix shebangs for nix sandbox (no /usr/bin/env)
      patchShebangs node_modules

      # Run postinstall manually to sync pdfjs workers
      node scripts/sync-pdfjs-workers.js
    '';

    buildPhase = ''
      npm run build
    '';

    installPhase = ''
      cp -r out $out
    '';

    # FOD: allows network access for next/font Google Fonts download at build time.
    # Hash must be updated when source changes.
    outputHashMode = "recursive";
    outputHashAlgo = "sha256";
    outputHash = staticHash;
  };

in
stdenv.mkDerivation {
  pname = "pdfcraft";
  version = "0.1.0";

  dontUnpack = true;

  nativeBuildInputs = [ gzip ];

  installPhase = let
    nginxConf = builtins.toFile "pdfcraft-nginx.conf" ''
      daemon off;
      worker_processes 1;
      error_log /dev/stderr;
      pid /tmp/nginx.pid;

      events {
        worker_connections 1024;
      }

      http {
        include NGINX_MIME_TYPES;
        types {
          application/wasm wasm;
          application/javascript mjs;
        }
        default_type application/octet-stream;
        access_log /dev/stdout;
        sendfile on;
        keepalive_timeout 65;
        client_body_temp_path /tmp/nginx_client_body;
        proxy_temp_path /tmp/nginx_proxy;
        fastcgi_temp_path /tmp/nginx_fastcgi;
        uwsgi_temp_path /tmp/nginx_uwsgi;
        scgi_temp_path /tmp/nginx_scgi;

        gzip on;
        gzip_vary on;
        gzip_proxied any;
        gzip_comp_level 6;
        gzip_min_length 256;
        gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript image/svg+xml application/wasm;

        server {
          listen 3000;
          server_name _;
          root PDFCRAFT_ROOT;
          index index.html;

          add_header X-Content-Type-Options "nosniff" always;
          add_header X-Frame-Options "SAMEORIGIN" always;
          add_header X-XSS-Protection "1; mode=block" always;
          add_header Referrer-Policy "strict-origin-when-cross-origin" always;
          add_header Cross-Origin-Opener-Policy "same-origin" always;
          add_header Cross-Origin-Embedder-Policy "require-corp" always;
          add_header Cross-Origin-Resource-Policy "cross-origin" always;

          location ~* \.(ico|jpg|jpeg|png|gif|svg|webp|avif|woff|woff2|ttf|eot)$ {
            expires 1y;
            add_header Cache-Control "public, max-age=31536000, immutable";
            access_log off;
          }

          location ~* \.(js|css|mjs)$ {
            expires 1y;
            add_header Cache-Control "public, max-age=31536000, immutable";
            access_log off;
          }

          location ^~ /libreoffice-wasm/ {
            gzip_static on;
            expires 1y;
            add_header Cache-Control "public, max-age=31536000, immutable";
            types {
              application/wasm wasm;
              application/javascript js;
              application/octet-stream data;
            }
          }

          location / {
            try_files $uri $uri.html $uri/ =404;
            add_header Cache-Control "public, max-age=0, must-revalidate";
          }

          error_page 404 /404.html;
          location = /404.html {
            internal;
          }
        }
      }
    '';
  in ''
    runHook preInstall

    # Install static files
    mkdir -p $out/share/pdfcraft
    cp -r ${pdfcraft-static}/* $out/share/pdfcraft/

    # Decompress LibreOffice WASM .gz files
    if [ -d $out/share/pdfcraft/libreoffice-wasm ]; then
      cd $out/share/pdfcraft/libreoffice-wasm
      for f in *.gz; do
        if [ -f "$f" ]; then
          ${gzip}/bin/gzip -dk "$f" || true
        fi
      done
    fi

    # Install nginx config
    mkdir -p $out/etc/pdfcraft
    sed -e "s|PDFCRAFT_ROOT|$out/share/pdfcraft|g" \
        -e "s|NGINX_MIME_TYPES|${nginx}/conf/mime.types|g" \
        ${nginxConf} > $out/etc/pdfcraft/nginx.conf

    # Install run script
    mkdir -p $out/bin
    cat > $out/bin/pdfcraft <<'WRAPPER'
#!/bin/sh
PDFCRAFT_PORT=''${PDFCRAFT_PORT:-3000}
PDFCRAFT_CONF="@out@/etc/pdfcraft/nginx.conf"
RUNTIME_CONF=$(mktemp /tmp/pdfcraft-nginx.XXXXXX.conf)

sed "s|listen 3000|listen $PDFCRAFT_PORT|g" "$PDFCRAFT_CONF" > "$RUNTIME_CONF"

trap "rm -f $RUNTIME_CONF" EXIT

echo "PDFCraft running at http://localhost:$PDFCRAFT_PORT"
exec @nginx@/bin/nginx -c "$RUNTIME_CONF"
WRAPPER

    substituteInPlace $out/bin/pdfcraft \
      --replace-fail "@out@" "$out" \
      --replace-fail "@nginx@" "${nginx}"
    chmod +x $out/bin/pdfcraft

    runHook postInstall
  '';

  passthru = {
    static = pdfcraft-static;
  };

  meta = with lib; {
    description = "PDFCraft - Professional PDF Tools, Free, Private & Browser-Based";
    homepage = "https://github.com/PDFCraftTool/pdfcraft";
    license = licenses.agpl3Only;
    platforms = [ "x86_64-linux" "aarch64-linux" ];
    mainProgram = "pdfcraft";
  };
}
