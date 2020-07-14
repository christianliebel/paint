export const helpMenu = {
  caption: 'Help',
  mnemonic: 'H',
  helpText: '',
  entries: [
    {
      caption: 'Help Topics',
      mnemonic: 'H',
      helpText: 'Displays Help for the current task or command.',
    },
    {
      separator: true,
    },
    {
      caption: 'About Paint',
      mnemonic: 'A',
      helpText: 'Displays program information, version number, and copyright.',
      instance: {
        execute() {
          window.open('https://github.com/christianliebel/paint', '_blank');
        }
      },
    },
    {
      // TODO: Move to About window once we have it
      caption: 'Third-party Software',
      mnemonic: 'T',
      helpText: 'Displays licenses of third-party software.',
      instance: {
        execute() {
          window.open('3rdpartylicenses.txt', '_blank');
        }
      },
    },
  ],
};
