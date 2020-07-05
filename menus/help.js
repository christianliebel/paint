export const helpMenu = {
    caption: 'Help',
    mnemonic: 'H',
    helpText: '',
    entries: [{
        caption: 'Help Topics',
        mnemonic: 'H',
        helpText: 'Displays Help for the current task or command.',
        disabled: true
    }, {
        separator: true
    }, {
        caption: 'About Paint',
        mnemonic: 'A',
        helpText: 'Displays program information, version number, and copyright.',
        action: () => window.open('https://github.com/christianliebel/paint', '_blank')
    }]
};
