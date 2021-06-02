import type { DrawingContext } from './drawing-context';

export interface ToolColor {
  stroke: { key: 'primary' | 'secondary'; value: string };
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
