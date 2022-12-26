export class RedoAction {
  canExecute(drawingContext) {
    return drawingContext?.history?.canRedo() ?? false;
  }
  execute(drawingContext) {
    drawingContext?.history?.redo();
  }
}