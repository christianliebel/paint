import type { History } from '../helpers/history';
import type { Brush } from './brush';
import type { FillStyle } from './fill-style';
import type { Selection } from './selection';
import type { TextContext } from './text-context';
import type { ToolDefinition } from './tool-definition';

/**
 * The drawing context is the central state of the application.
 */
export interface DrawingContext {
  /**
   * Contains the line width used by the Line, Curve, Rectangle, Polygon,
   * Ellipse, and Rounded Rectangle tools.
   */
  lineWidth: number;

  /**
   * Contains the size of the Eraser/Color Eraser tool.
   */
  eraserSize: number;

  /**
   * Contains the selected magnifier size. This is used to scale the canvas.
   */
  magnifierSize: number;

  /**
   * Contains the previously selected magnifier size. This is used by the
   * Magnifier tool to preview the area the user will zoom into.
   */
  previousMagnifierSize: number;

  /*
   * Defines if the grid should be shown. Only applied when the zoom level is
   * greater than or equal to 400%.
   */
  showGrid: boolean;

  /**
   * Contains the size of the Airbrush tool.
   */
  airbrushSize: number;

  // TODO: Tertiary color
  /**
   * Contains the currently selected primary and secondary colors.
   */
  colors: { primary: string; secondary: string };

  /**
   * Contains the colors of the color palette in hex (e.g., #abcdef).
   */
  palette: string[];

  /**
   * Contains the index of the last clicked color in the palette.
   */
  selectedPaletteIndex: number;

  /**
   * Contains the hovered color when the Pick Color is used.
   */
  previewColor: string | null;

  /**
   * Determines if selections or text boxes should select opaque or transparent
   * areas.
   */
  drawOpaque: boolean;

  /**
   * Contains the currently selected brush used by the Brush tool.
   */
  brush: Brush;

  /**
   * Contains the currently selected fill style.
   */
  fillStyle: FillStyle;

  /**
   * Contains the currently selected tool.
   */
  tool: ToolDefinition;

  /**
   * Contains the previously selected editing tool. Paint switches back to this
   * tool after using the Pick Color tool, or when the Text tool is not
   * available (i.e., the user has zoomed in).
   */
  previousEditingTool: ToolDefinition;

  /**
   * Contains information about the current selection, if present.
   */
  selection: Selection | null;

  // TODO: Type for detached color and tool box
  /**
   * Contains view-related information
   */
  view: {
    /**
     * Determines if the status bar is visible.
     */
    statusBar: boolean;
    /**
     * Determines if the color bar is visible.
     */
    colorBox: boolean;
    /**
     * Determines if the tool box is visible.
     */
    toolBox: boolean;
    /**
     * Determines if the text toolbar is visible. This property is set to true
     * if text editing is active, and the user has the text toolbar enabled.
     * {@see TextContext}
     */
    textToolbar: boolean;
  };

  /**
   * Contains the document context.
   */
  document: {
    /**
     * Contains the title of the currently opened document.
     */
    title: string;
    /**
     * Determines if the document has unsaved changes.
     */
    dirty: boolean;
    /**
     * Contains the document's {@see FileSystemFileHandle} to overwrite its file on
     * the local file system. Requires support for the Local File System Access
     * API on the user's target platform.
     */
    handle?: FileSystemFileHandle;
  };

  /**
   * Contains the text context.
   */
  text: TextContext;

  /**
   * Contains the history (i.e., undo and redo stack).
   */
  history: History | null;

  /**
   * Contains an element used for dispatching updates when the drawing context
   * changes and there's no direct reference to another element
   * {@see updateContext}.
   */
  element: (HTMLElement & { drawingContext: DrawingContext }) | null;

  /**
   * Contains a reference to the preview canvas.
   */
  previewCanvas: HTMLCanvasElement | null;

  /**
   * Contains a reference to the preview 2D context.
   */
  previewContext: CanvasRenderingContext2D | null;

  /**
   * Contains a reference to the main canvas.
   */
  canvas: HTMLCanvasElement | null;

  /**
   * Contains a reference to the main 2D context.
   */
  context: CanvasRenderingContext2D | null;
}
