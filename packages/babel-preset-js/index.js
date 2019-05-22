/**
 * for javascript
 */

module.exports = (context, { modules = false, useBuiltIns = false, legacy = true  } = {}) => {
  const presets = [
    [
      '@babel/preset-env',
      {
        modules,
        useBuiltIns,
      },
    ],
    '@babel/preset-typescript',
  ]

  const plugins = [
    // 只在顶部引用一次 'helpers'
    '@babel/plugin-external-helpers',
    // stage
    '@babel/plugin-syntax-dynamic-import',
    ['@babel/plugin-proposal-decorators', { "legacy": legacy }],
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
        plugins: ['@babel/plugin-transform-modules-commonjs', 'dynamic-import-node'],
      },
    },
  }
}
