import { instance, mock, verify } from 'ts-mockito';
import type { DrawingContext } from '../models/drawing-context';
import { ViewBitmapAction } from './view-bitmap';

describe('ViewBitmapAction', () => {
  let sut: ViewBitmapAction;

  beforeEach(() => {
    sut = new ViewBitmapAction();
  });

  describe('execute', () => {
    test('should show canvas element in fullscreen', () => {
      const canvasMock = mock<HTMLCanvasElement>();

      sut.execute({ canvas: instance(canvasMock) } as DrawingContext);

      verify(canvasMock.requestFullscreen()).once();
    });
  });
});
