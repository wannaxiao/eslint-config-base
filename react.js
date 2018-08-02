/**
 * face to react
 */

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    // ECMAScript 版本
    ecmaVersion: 2018,
  },
  // 指定环境
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true,
  },
  // 全局变量
  globals: {
    cordova: false,
  },
  extends: ['plugin:react/recommended','standard'],
  // 配置插件
  plugins: ['react', 'jsx-a11y'],
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
  }
}
