module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules/', '/dist/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jx?$',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  verbose: true,
  moduleDirectories: ['node_modules', 'src'],
  // moduleNameMapper: {
  //   '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileMock.js',
  // },
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};
