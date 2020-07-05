import { fileOpen } from '../web_modules/browser-nativefs.js';

export async function open({ canvas, context }) {
  const file = await fileOpen({ extensions: ['png'] });
  const image = new Image();
  image.onload = () => {
    canvas.width = image.width;
    canvas.height = image.height;
    context.fillStyle = 'white';
    context.fillRect(0, 0, image.width, image.height);
    context.drawImage(image, 0, 0);
    URL.revokeObjectURL(image.src);
  };
  image.src = URL.createObjectURL(file);
}
