/**
 * for typescript
 */

module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', '@momoko/js'],
  // 解析器选项
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  // 配置插件
  plugins: ['@typescript-eslint'],
  // add your custom rules here
  // 'off' 或 0 - 关闭规则
  // 'warn' 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // 'error' 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  rules: {
    // 自定义规则：
    // 关闭 @typescript-eslint 缩进规则，使用 @momoko/js 缩进规则
    '@typescript-eslint/indent': 'off',
    // 除 import 语句外，不允许使用 require 语句
    '@typescript-eslint/no-var-requires': 'off',
  },
}
