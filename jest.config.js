module.exports = {
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  coveragePathIgnorePatterns: ['/node_modules/', 'setupTests.js'],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json',
    'node',
  ],
  setupFiles: [
    '<rootDir>/src/setupTests.js',
  ],
};
