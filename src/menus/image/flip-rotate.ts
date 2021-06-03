import type { FlipRotateParams } from '../../elements/dialogs/flip-and-rotate';
import { showDialog } from '../../helpers/dialog';
import type { History } from '../../helpers/history';
import type { DrawingContext } from '../../models/drawing-context';
import type { MenuAction } from '../../models/menu-action';

export class FlipRotateAction implements MenuAction {
  async execute({
    context,
    canvas,
    previewCanvas,
    history,
  }: DrawingContext): Promise<void> {
    const result = await showDialog<FlipRotateParams>(
      'paint-dialog-flip-and-rotate',
    );

    if (!result || !canvas || !context || !previewCanvas || !history) {
      return;
    }

    FlipRotateAction.flipOrRotate(
      result,
      canvas,
      previewCanvas,
      context,
      history,
    );
  }

  private static flipOrRotate(
    result: FlipRotateParams,
    canvas: HTMLCanvasElement,
    previewCanvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    history: History,
  ): void {
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

  private static cloneCanvas(canvas: HTMLCanvasElement): HTMLCanvasElement {
    const clonedCanvas = document.createElement('canvas');
    clonedCanvas.width = canvas.width;
    clonedCanvas.height = canvas.height;
    clonedCanvas.getContext('2d')?.drawImage(canvas, 0, 0);
    return clonedCanvas;
  }

  private static flip(
    mode: 'horizontal' | 'vertical',
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ): void {
    if (mode === 'horizontal') {
      context.translate(canvas.width, 0);
      context.scale(-1, 1);
    } else if (mode === 'vertical') {
      context.translate(0, canvas.height);
      context.scale(1, -1);
    }
  }

  private static rotate(
    degrees: number,
    canvas: HTMLCanvasElement,
    previewCanvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
  ): void {
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

  private static rotateCanvas(
    canvas: HTMLCanvasElement,
    previewCanvas: HTMLCanvasElement,
  ): void {
    const { height: width, width: height } = canvas;
    canvas.height = previewCanvas.height = height;
    canvas.width = previewCanvas.width = width;
  }

  private static getRadianAngle(degrees: number): number {
    return (degrees * Math.PI) / 180;
  }
}
