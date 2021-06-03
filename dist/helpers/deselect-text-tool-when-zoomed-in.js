import { TextTool } from '../tools/text.js';
import { evaluateTextToolbarVisibility } from './evaluate-text-toolbar-visibility.js';
export function deselectTextToolWhenZoomedIn(context) {
  if (context.magnifierSize !== 1 && context.tool.instance instanceof TextTool) {
    context.tool = context.previousEditingTool;
    context.text.active = false;
    evaluateTextToolbarVisibility(context);
  }
}