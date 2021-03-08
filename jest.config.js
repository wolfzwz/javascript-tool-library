// 配置文档
// 需要安装 babel-jest，文档：https://www.npmjs.com/package/babel-jest
// 注意到，文档中说，如果使用babel 7的话，需要安装babel 6~7的桥接版本'babel-core@^7.0.0-bridge'

module.exports = {
  // 生成覆盖率
  "collectCoverage": true,
  "testEnvironment": "node",
  // 报告每个测试的执行情况，显示执行时间
  "verbose": true,
  "testPathIgnorePatterns": [
    "<rootDir>/node_modules/"
  ],
  transform: { "\\.ts$": ['ts-jest'] }
}
