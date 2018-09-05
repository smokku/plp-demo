module.exports = {
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: ['src/**.{js,jsx}', '!**/node_modules/**'],
  transformIgnorePatterns: ['node_modules/(?!(jsoneditor-react)/)'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'empty-module',
    '\\.(css|less|scss)$': 'empty-module',
  },
}
