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
    // 使用 @typescript-eslint 规则
    'indent': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    // 缩进 2 空格
    '@typescript-eslint/indent': ['error', 2],
    // 除 import 语句外，不允许使用 require 语句
    '@typescript-eslint/no-var-requires': 'off',
    // 允许 any
    '@typescript-eslint/no-explicit-any': 'off',
    // 在类属性和方法上需要显式的可访问性修饰符
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      { 'accessibility': 'no-public' },
    ],
    // 接口和类的成员分隔符样式
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'none',
          'requireLast': true,
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false,
        },
      },
    ],
    // 只检查声明函数的返回值，不检查匿名函数/函数表达式
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      { 'allowExpressions': true },
    ],
  },
}
