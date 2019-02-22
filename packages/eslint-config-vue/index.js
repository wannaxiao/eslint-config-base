/**
 * for vue
 */

module.exports = {
  extends: ['plugin:vue/recommended', '@momoko/js'],
  // 配置插件
  plugins: ['vue', 'jsx-a11y'],
  // add your custom rules here
  // 'off' 或 0 - 关闭规则
  // 'warn' 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // 'error' 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  rules: {
    // 自定义的 plugin-vue 规则：
    // 单行中允许多个属性
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false,
        },
      },
    ],
    // 强制自闭合空标签
    'vue/html-self-closing': 'off',
    // 标签强制换行，该属性会导致编辑器折叠失效
    'vue/html-closing-bracket-newline': 'off',
    // v-html 验证
    'vue/no-v-html': 'off',
    // 单行标签强制换行
    'vue/singleline-html-element-content-newline': 'off',
    // 多行标签强制换行
    // 'vue/multiline-html-element-content-newline': 'off',
  },
}
