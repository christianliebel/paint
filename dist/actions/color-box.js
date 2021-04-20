import {updateContext} from "../helpers/update-context.js";
export class ColorBoxAction {
  isChecked({view: {colorBox}}) {
    return colorBox;
  }
  execute(drawingContext) {
    drawingContext.view.colorBox = !drawingContext.view.colorBox;
    updateContext(drawingContext.element);
  }
}
