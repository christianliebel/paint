import { showDialog } from '../../helpers/dialog.js';
export class FlipRotateAction {
  async execute({
    context,
    canvas,
    previewCanvas,
    history
  }) {
    const result = await showDialog('paint-dialog-flip-and-rotate');
    if (!result || !canvas || !context || !previewCanvas || !history) {
      return;
    }
    FlipRotateAction.flipOrRotate(result, canvas, previewCanvas, context, history);
  }
  static flipOrRotate(result, canvas, previewCanvas, context, history) {
    // Could be optimized by only cloning the canvas if a rotate 90/270
    // operation takes place.
    const oldCanvas = FlipRotateAction.cloneCanvas(canvas);
    if (result.action === 'flip') {
      FlipRotateAction.flip(result.param, canvas, context);
    } else if (result.action === 'rotate') {
      FlipRotateAction.rotate(result.param, canvas, previewCanvas, context);
    }
    context.drawImage(oldCanvas, 0, 0);
    context.setTransform(1, 0, 0, 1, 0, 0);
    history.commit();
  }
  static cloneCanvas(canvas) {
    const clonedCanvas = document.createElement('canvas');
    clonedCanvas.width = canvas.width;
    clonedCanvas.height = canvas.height;
    clonedCanvas.getContext('2d')?.drawImage(canvas, 0, 0);
    return clonedCanvas;
  }
  static flip(mode, canvas, context) {
    if (mode === 'horizontal') {
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
    } else if (mode === 'vertical') {
      context.translate(0, canvas.height);
      context.scale(1, -1);
    }
  }
  static rotate(degrees, canvas, previewCanvas, context) {
    if (degrees === 90) {
      FlipRotateAction.rotateCanvas(canvas, previewCanvas);
      context.translate(canvas.width, 0);
      context.rotate(FlipRotateAction.getRadianAngle(90));
    } else if (degrees === 180) {
      context.translate(canvas.width, canvas.height);
      context.rotate(FlipRotateAction.getRadianAngle(180));
    } else if (degrees === 270) {
      FlipRotateAction.rotateCanvas(canvas, previewCanvas);
      context.translate(0, canvas.height);
      context.rotate(FlipRotateAction.getRadianAngle(270));
    }
  }
  static rotateCanvas(canvas, previewCanvas) {
    const {
      height: width,
      width: height
    } = canvas;
    canvas.height = previewCanvas.height = height;
    canvas.width = previewCanvas.width = width;
  }
  static getRadianAngle(degrees) {
    return degrees * Math.PI / 180;
  }
}