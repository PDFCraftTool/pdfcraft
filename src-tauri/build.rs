fn strip_bom_from_capabilities() {
    if let Ok(entries) = std::fs::read_dir("capabilities") {
        for entry in entries.flatten() {
            let path = entry.path();
            if path.extension().and_then(|e| e.to_str()) == Some("json") {
                if let Ok(bytes) = std::fs::read(&path) {
                    if bytes.starts_with(&[0xef, 0xbb, 0xbf]) {
                        let _ = std::fs::write(&path, &bytes[3..]);
                    }
                }
            }
        }
    }
}

fn main() {
    strip_bom_from_capabilities();
    // The production build serves the frontend from a loopback HTTP server instead of the
    // `tauri://localhost` custom protocol (WKWebView does not treat custom schemes as a
    // secure context, which breaks Cross-Origin Isolation / SharedArrayBuffer). That origin
    // is classified as *remote*, so the command permissions have to be declared here and
    // granted in the capability for them to stay callable from the frontend.
    let attributes = tauri_build::Attributes::new().app_manifest(
        tauri_build::AppManifest::new().commands(&[
            "open_files",
            "save_file",
            "read_file",
            "write_file",
            "get_temp_dir",
            "open_url",
            "get_system_printers",
            "print_pdf_file",
        ]),
    );
    if let Err(error) = tauri_build::try_build(attributes) {
        eprintln!("Error in tauri_build: {error:#}");
        std::process::exit(1);
    }
}
