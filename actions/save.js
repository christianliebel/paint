import {saveAs} from './save-as.js';

export function save({ canvas }) {
    // TODO: Document Context
    // TODO: Overwrite file if we have a handle, otherwise "save as"
    saveAs({ canvas });
}
