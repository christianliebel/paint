import { ClearImageAction } from './clear-image';

export class NewAction {
  // TODO: Document context
  // TODO: Confirm to close document
  execute(drawingContext) {
    new ClearImageAction().execute(drawingContext);
  }
}
