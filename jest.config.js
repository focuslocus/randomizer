module.exports = {
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "setupFilesAfterEnv": [
    "./jest.setup.js"
  ],
  "collectCoverage": true,
  "verbose": true
}
