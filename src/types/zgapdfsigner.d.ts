declare module 'zgapdfsigner' {
  export interface SignOption {
    p12cert: ArrayBuffer;
    pwd: string;
    reason?: string;
    location?: string;
    contact?: string;
    drawinf?: {
      area: { x: number; y: number; w: number; h: number };
      pageidx: number | string;
      imgInfo?: { imgData: ArrayBuffer; imgType: string };
      textInfo?: { text: string; size: number; color: string };
    };
  }

  export class PdfSigner {
    constructor(options: Record<string, unknown>);
    sign(pdfBytes: Uint8Array): Promise<ArrayBuffer>;
    protected privateKey: unknown;
    protected cchain: CertsChain | null;
    protected loadP12cert(p12cert?: unknown, pwd?: string): unknown;
  }

  export class CertsChain {
    constructor(certs?: unknown[]);
    getSignCert(): unknown;
    getAllCerts(): unknown[];
  }
}
