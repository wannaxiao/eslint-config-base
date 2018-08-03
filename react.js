/**
 * face to react
 */

module.exports = {
  extends: ['plugin:react/recommended', './index.js'],
  // 配置插件
  plugins: ['react', 'jsx-a11y'],
  // add your custom rules here
  // 'off' 或 0 - 关闭规则
  // 'warn' 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // 'error' 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  rules: {},
}
