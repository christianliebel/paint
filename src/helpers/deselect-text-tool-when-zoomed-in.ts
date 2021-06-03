import type { DrawingContext } from '../models/drawing-context';
import { TextTool } from '../tools/text';
import { evaluateTextToolbarVisibility } from './evaluate-text-toolbar-visibility';

export function deselectTextToolWhenZoomedIn(context: DrawingContext): void {
  if (
    context.magnifierSize !== 1 &&
    context.tool.instance instanceof TextTool
  ) {
    context.tool = context.previousEditingTool;
    context.text.active = false;
    evaluateTextToolbarVisibility(context);
  }
}
