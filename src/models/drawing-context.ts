import type { FileSystemHandle } from 'browser-fs-access';
import type { History } from '../helpers/history';
import type { TextContext } from './text-context';
import type { Brush } from './brush';
import type { FillStyle } from './fill-style';
import type { Selection } from './selection';
import type { ToolDefinition } from './tool-definition';

export interface DrawingContext {
  lineWidth: number;
  eraserSize: number;
  magnifierSize: number;
  airbrushSize: number;

  colors: { primary: string; secondary: string };
  palette: string[];
  previewColor: string | null;
  drawOpaque: boolean;
  brush: Brush;
  fillStyle: FillStyle;
  tool: ToolDefinition;
  previousEditingTool?: ToolDefinition;
  selection: Selection | null;
  view: {
    statusBar: boolean;
    colorBox: boolean;
    toolBox: boolean;
    textToolbar: boolean;
  };
  document: { title: string; dirty: boolean; handle?: FileSystemHandle };
  text: TextContext;
  history: History | null;

  element: (HTMLElement & { drawingContext: DrawingContext }) | null;

  previewCanvas: HTMLCanvasElement | null;
  previewContext: CanvasRenderingContext2D | null;

  canvas: HTMLCanvasElement | null;
  context: CanvasRenderingContext2D | null;
}
