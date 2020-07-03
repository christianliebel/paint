import {open} from '../actions/open.js';
import {save} from '../actions/save.js';

export const fileMenu = {
    caption: 'File',
    mnemonic: 'F',
    helpText: '',
    entries: [{
        caption: 'New',
        mnemonic: 'N',
        shortcut: 'Ctrl+N',
        helpText: 'Creates a new document.',
        disabled: true
    }, {
        caption: 'Open…',
        mnemonic: 'O',
        shortcut: 'Ctrl+O',
        helpText: 'Opens an existing document.',
        action: open
    }, {
        caption: 'Save',
        mnemonic: 'S',
        shortcut: 'Ctrl+S',
        helpText: 'Saves the active document.',
        disabled: true
    }, {
        caption: 'Save As…',
        mnemonic: 'A',
        shortcut: 'Ctrl+A',
        helpText: 'Saves the active document with a new name.',
        disabled: true
    }, {
        separator: true
    }, {
        caption: 'Print Preview',
        mnemonic: 'v',
        helpText: 'Displays full pages.',
        disabled: true
    }, {
        caption: 'Page Setup…',
        mnemonic: 't',
        helpText: 'Changes the page layout.',
        disabled: true
    }, {
        caption: 'Print…',
        mnemonic: 'P',
        shortcut: 'Ctrl+P',
        helpText: 'Prints the active document and sets printing options.',
        disabled: true
    }, {
        separator: true
    }, {
        caption: 'Set As Wallpaper (Tiled)',
        mnemonic: 'W',
        helpText: 'Tiles this bitmap as the desktop wallpaper.',
        disabled: true // not exposed to web
    }, {
        caption: 'Set As Wallpaper (Centered)',
        mnemonic: 'l',
        helpText: 'Centers this bitmap as the desktop wallpaper.',
        disabled: true // not exposed to web
    }, {
        separator: true
    // TODO: Recent files/NativeFS
    // }, {
    //     helpText: 'Opens this document.'
    }, {
        caption: 'Exit',
        mnemonic: 'x',
        shortcut: 'Alt+F4',
        helpText: 'Quits Paint.',
        disabled: true // closing the app's own tab is not possible
    }]
};
