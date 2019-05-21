# eslint-config

## 安装

```bash
# for js
yarn add -D eslint @momoko/eslint-config-js
# for ts
yarn add -D eslint @momoko/eslint-config-ts
# for vue
yarn add -D eslint @momoko/eslint-config-vue
# for react
yarn add -D eslint @momoko/eslint-config-react
```

## 使用

> package.json 中添加

```js
  "eslintConfig": {
    "extends": [
      "@momoko/js"
    ]
  },
```

# babel-preset

## 安装

```bash
# for js
yarn add -D @momoko/babel-preset-js
# for vue
yarn add -D @momoko/babel-preset-vue
```

## 使用

> package.json 中添加

```js
  "babel": {
    "presets": [
      ["@momoko/js", {
        "useBuiltIns": "usage"
      }]
    ]
  },
  "browserslist": [
    "iOS >= 8",
    "Android >= 4.4"
  ]
```
