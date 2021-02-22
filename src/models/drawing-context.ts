import type { Brush } from './brush';
import type { FillStyle } from './fill-style';
import type { Selection } from './selection';
import type { ToolDefinition } from './tool-definition';

export interface DrawingContext {
  lineWidth: number;
  eraserSize: number;
  magnifierSize: number;
  airbrushSize: number;

  colors: { primary: string, secondary: string };
  palette: string[];
  previewColor: string | null;
  drawOpaque: boolean;
  brush: Brush;
  fillStyle: FillStyle;
  tool: ToolDefinition;
  selection: Selection | null;
  view: { statusBar: boolean, colorBox: boolean, toolBox: boolean };
  document: { title: string };

  element: HTMLElement & { drawingContext: DrawingContext } | null;

  previewCanvas: HTMLCanvasElement | null;
  previewContext: CanvasRenderingContext2D | null;

  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
}
