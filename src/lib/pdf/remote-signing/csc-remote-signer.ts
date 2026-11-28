/**
 * Adapts a CSC credential to the RemoteSigner the PDF signer uses.
 */
import forge from 'node-forge';
import type { RemoteSigner } from '@/types/digital-signature';
import { CscClient, CscCredential, CscError, isRsaCredential } from './csc-client';

export interface CscSignerAuth {
  /** PIN / OTP values keyed by CscAuthObject.id (explicit and implicit credentials) */
  secrets?: Record<string, string>;
  /** For credentials with authMode "oauth2code": runs the credential-scope OAuth flow for this hash */
  authorizeWithOAuth?: (hash: Uint8Array) => Promise<string>;
}

export function credentialCertificates(credential: CscCredential): forge.pki.Certificate[] {
  if (credential.certificates.length === 0) {
    throw new CscError('The signing service returned no certificate for this credential');
  }
  return credential.certificates.map((b64) => {
    try {
      const der = forge.util.decode64(b64.replace(/\s+/g, ''));
      return forge.pki.certificateFromAsn1(forge.asn1.fromDer(der));
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      // forge only reads RSA public keys
      throw new CscError(/not RSA/i.test(msg) ? 'Only RSA signing keys are supported' : `Could not read the certificate: ${msg}`);
    }
  });
}

export function createCscRemoteSigner(client: CscClient, credential: CscCredential, auth: CscSignerAuth): RemoteSigner {
  if (!isRsaCredential(credential)) {
    throw new CscError('Only RSA signing keys are supported');
  }
  return {
    certificates: credentialCertificates(credential),
    async signHash(hash: Uint8Array): Promise<Uint8Array> {
      let result: Uint8Array[];
      if (credential.authMode === 'oauth2code') {
        if (!auth.authorizeWithOAuth) throw new CscError('This credential must be authorized through the provider\'s sign-in page');
        const credentialToken = await auth.authorizeWithOAuth(hash);
        result = await client.signHash(credential, [hash], { credentialToken });
      } else {
        const sad = await client.authorize(credential, [hash], auth.secrets ?? {});
        result = await client.signHash(credential, [hash], { sad });
      }
      return result[0];
    },
  };
}
