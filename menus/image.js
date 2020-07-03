import {clearImage} from '../actions/clear-image.js';
import {invertImage} from '../actions/invert-image.js';

export const imageMenu = {
    caption: 'Image',
    mnemonic: 'I',
    helpText: '',
    entries: [{
        caption: 'Flip/Rotate…',
        mnemonic: 'F',
        shortcut: 'Ctrl+R',
        helpText: 'Flips or rotates the picture or a selection.',
        disabled: true
    }, {
        caption: 'Stretch/Skew…',
        mnemonic: 'S',
        shortcut: 'Ctrl+W',
        helpText: 'Stretches or skews the picture or a selection.',
        disabled: true
    }, {
        caption: 'Invert Colors',
        mnemonic: 'I',
        shortcut: 'Ctrl+I',
        helpText: 'Inverts the colors of the picture or a selection.',
        action: invertImage
    }, {
        caption: 'Attributes…',
        mnemonic: 'A',
        shortcut: 'Ctrl+E',
        helpText: 'Changes the attributes of the picture.',
        disabled: true
    }, {
        caption: 'Clear Image',
        mnemonic: 'C',
        shortcut: 'Ctrl+Shft+N',
        helpText: 'Clears the picture or selection.',
        action: clearImage
    }]
};
