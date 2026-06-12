module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          module: 'node18',
          moduleResolution: 'node16',
          allowImportingTsExtensions: false
        }
      }
    ]
  }
};
