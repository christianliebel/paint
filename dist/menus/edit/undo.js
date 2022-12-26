export class UndoAction {
  canExecute(drawingContext) {
    return drawingContext?.history?.canUndo() ?? false;
  }
  execute(drawingContext) {
    drawingContext?.history?.undo();
  }
}