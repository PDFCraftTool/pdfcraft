/**
 * Digital Signature Types
 */
import type forge from 'node-forge';

export interface CertificateData {
  p12Buffer: ArrayBuffer;
  password: string;
  certificate: forge.pki.Certificate;
}

/**
 * A signing key held by a remote service (e.g. a CSC API provider). Only hashes leave the browser.
 */
export interface RemoteSigner {
  /** Signing certificate first, then the rest of the chain */
  certificates: forge.pki.Certificate[];
  /** Returns the raw RSA PKCS#1 v1.5 signature of a SHA-256 hash */
  signHash(sha256: Uint8Array): Promise<Uint8Array>;
}

export interface SignatureInfo {
  reason?: string;
  location?: string;
  contactInfo?: string;
}

export interface VisibleSignatureOptions {
  enabled: boolean;
  x: number;
  y: number;
  width: number;
  height: number;
  page: number | string;
  imageData?: ArrayBuffer;
  imageType?: 'png' | 'jpeg' | 'webp';
  text?: string;
  textColor?: string;
  textSize?: number;
}

export interface SignPdfOptions {
  signatureInfo?: SignatureInfo;
  visibleSignature?: VisibleSignatureOptions;
}

export interface ExtractedSignature {
  index: number;
  contents: Uint8Array;
  byteRange: number[];
  reason?: string;
  location?: string;
  contactInfo?: string;
  name?: string;
  signingTime?: string;
}

export interface SignatureValidationResult {
  signatureIndex: number;
  isValid: boolean;
  signerName: string;
  signerOrg?: string;
  signerEmail?: string;
  issuer: string;
  issuerOrg?: string;
  validFrom: Date;
  validTo: Date;
  isExpired: boolean;
  isSelfSigned: boolean;
  isTrusted: boolean;
  signatureDate?: Date;
  algorithms: {
    digest: string;
    signature: string;
  };
  serialNumber: string;
  byteRange: number[];
  coverageStatus: 'full' | 'partial' | 'unknown';
  reason?: string;
  location?: string;
  contactInfo?: string;
  errorMessage?: string;
}
