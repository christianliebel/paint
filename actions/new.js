import {clearImage} from './clear-image.js';

export function fileNew({ canvas, context }) {
    // TODO: Document context
    // TODO: Confirm to close document
    clearImage({ canvas, context });
}
