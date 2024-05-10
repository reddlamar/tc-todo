module.exports = {
  preset: 'react-native',
  transform: {
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!variables/.*|(@react-native|react-native|NativeEventEmitter|@react-navigation|./style))',
  ],
  setupFiles: [
    '<rootDir>/node_modules/react-native-gesture-handler/jestSetup.js',
  ],
};
