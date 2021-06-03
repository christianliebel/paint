import type { DrawingContext } from './drawing-context';

/**
 * Contains the colors to be used by this tool.
 */
export interface ToolColor {
  /**
   * Contains the stroke color's key and value.
   */
  stroke: { key: 'primary' | 'secondary'; value: string };
  /**
   * Contains the fill color's key and value.
   */
  fill: { key: 'primary' | 'secondary'; value: string };
}

export interface Tool {
  onPointerHover?(
    x?: number,
    y?: number,
    drawingContext?: DrawingContext,
    color?: ToolColor,
  ): void;
  onPointerDown?(
    x?: number,
    y?: number,
    drawingContext?: DrawingContext,
    color?: ToolColor,
  ): void;
  onPointerMove?(
    x?: number,
    y?: number,
    drawingContext?: DrawingContext,
    color?: ToolColor,
  ): void;
  onPointerUp?(
    x?: number,
    y?: number,
    drawingContext?: DrawingContext,
    color?: ToolColor,
  ): void;
}
