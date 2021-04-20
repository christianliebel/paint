import {updateContext} from "../helpers/update-context.js";
import {ClearImageAction} from "./clear-image.js";
export class NewAction {
  execute(drawingContext) {
    drawingContext.document.handle = void 0;
    drawingContext.document.title = "untitled";
    updateContext(drawingContext.element);
    new ClearImageAction().execute(drawingContext);
  }
}
