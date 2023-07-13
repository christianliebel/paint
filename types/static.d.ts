/* Use this file to declare any custom file extensions for importing */
/* Use this folder to also add/extend a package d.ts file, if needed. */

/* CSS MODULES */
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.styl' {
  const classes: { [key: string]: string };
  export default classes;
}

/* CSS */
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';
declare module '*.styl';

/* IMAGES */
declare module '*.svg' {
  const ref: string;
  export default ref;
}
declare module '*.bmp' {
  const ref: string;
  export default ref;
}
declare module '*.gif' {
  const ref: string;
  export default ref;
}
declare module '*.jpg' {
  const ref: string;
  export default ref;
}
declare module '*.jpeg' {
  const ref: string;
  export default ref;
}
declare module '*.png' {
  const ref: string;
  export default ref;
}

/* CUSTOM: ADD YOUR OWN HERE */

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

// Type declarations for Web Share API + Files ("Level 2")
interface ShareData {
  files?: File[];
}

interface Navigator {
  canShare?: (data?: ShareData) => boolean;
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
