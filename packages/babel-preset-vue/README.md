# @momoko/babel-preset-vue

## 安装

```bash
yarn add -D @momoko/babel-preset-vue
```

## 使用

> package.json 中添加

```js
  "babel": {
    "presets": [
      ["@momoko/vue", {
        "useBuiltIns": "usage"
      }]
    ]
  },
  "browserslist": [
    "iOS >= 8",
    "Android >= 4.4"
  ]
```
