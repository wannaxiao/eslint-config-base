/**
 * for vue
 */

module.exports = {
  extends: ['plugin:vue/recommended', '@momo/js'],
  // 配置插件
  plugins: ['vue', 'jsx-a11y'],
  // add your custom rules here
  // 'off' 或 0 - 关闭规则
  // 'warn' 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // 'error' 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  rules: {
    // 自定义的 plugin-vue 规则：
    // 单行中允许多个属性
    'vue/max-attributes-per-line': ['error', {
      'singleline': 2,
      'multiline': {
        'max': 1,
        'allowFirstLine': false,
      },
    }],
    // 关闭属性名必须是 '-' 连接
    'vue/attribute-hyphenation': 0,
  },
}
