# @momoko/babel-preset-js

## 安装

```bash
yarn add -D @momoko/babel-preset-js
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
