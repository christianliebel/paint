declare module 'bresenham-zingl' {
  export function line(x0: number, y0: number, x1: number, y1: number, setPixel: (x: number, y: number) => unknown);
  export function ellipseRect(x0: number, y0: number, x1: number, y1: number, setPixel: (x: number, y: number) => unknown);
}

// Type declarations for File Handling API

interface LaunchParams {
  files: FileSystemFileHandle[];
}

interface LaunchQueue {
  setConsumer(consumer: (launchParams: LaunchParams) => unknown): void;
}

interface Window {
  launchQueue: LaunchQueue;
  queryLocalFonts: () => Promise<{ family: string }[]>;
}

// Type declarations for Local Font Access API
interface FontMetadata {
  blob(): Promise<Blob>;
  postscriptName: string;
  fullName: string;
  family: string;
}

interface FontManager {
  query(): AsyncIterable<FontMetadata>;
}

interface Navigator {
  fonts: FontManager;
}
