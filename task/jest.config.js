module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['node_modules/', '/dist/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  verbose: true,
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
};
