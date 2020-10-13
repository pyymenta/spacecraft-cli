module.exports = {
  testEnvironment: 'node',
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      tsConfig: '.tsconfig.json'
    }
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts"
  ]
};
