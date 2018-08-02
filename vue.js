/**
 * face to vue
 */

module.exports = {
  root: true,
  // 指定解析器
  parser: 'babel-eslint',
  // 解析器选项
  parserOptions: {
    sourceType: 'module',
    // ECMAScript 版本
    ecmaVersion: 2018,
    // 想使用的额外的语言特性:
    ecmaFeatures: {
      // 启用 JSX
      jsx: true,
    }
  },
  // 指定环境，每个环境都有自己预定义的全局变量
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  // 指定全局变量
  globals: {
    cordova: false, // false为只读
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
  // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: ['plugin:vue/recommended', 'standard'],
  // 配置插件
  plugins: ['vue', 'jsx-a11y'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  // 'off' 或 0 - 关闭规则
  // 'warn' 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
  // 'error' 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
  rules: {
    // 自定义的 standard 规则：
    // 箭头函数当只有一个参数时允许省略圆括号
    'arrow-parens': 0,
    // 允许生成器
    'generator-star-spacing': 0,
    // 对象和数组结尾强制分号
    'comma-dangle': [2, {
      'arrays': 'always-multiline',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always-multiline',
      'functions': 'ignore',
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // 自定义的 plugin-vue 规则：
    // 单行中允许多个属性
    'vue/max-attributes-per-line': ['error', {
      'singleline': 3,
      'multiline': {
        'max': 1,
        'allowFirstLine': false
      }
    }],
    // 关闭属性名必须是 '-' 连接
    'vue/attribute-hyphenation': 0,
  }
}
