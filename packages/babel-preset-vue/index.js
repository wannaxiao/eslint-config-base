/**
 * for vue
 */

module.exports = (context, { modules = false, useBuiltIns = false } = {}) => {
  const presets = [
    [
      '@babel/preset-env',
      {
        modules,
        useBuiltIns,
      },
    ],
  ]

  const plugins = [
    // vue
    '@vue/babel-plugin-transform-vue-jsx',
    // 只在顶部引用一次 'helpers'
    '@babel/plugin-external-helpers',
    // stage
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-class-properties',
    // transform-runtime
    '@babel/plugin-transform-runtime',
  ]

  return {
    presets,
    plugins,
    env: {
      test: {
        presets: ['@babel/preset-env'],
        plugins: ['@vue/babel-plugin-transform-vue-jsx', '@babel/plugin-transform-modules-commonjs', 'dynamic-import-node'],
      },
    },
  }
}
