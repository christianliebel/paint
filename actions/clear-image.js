export function clearImage(canvas, context) {
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
}
