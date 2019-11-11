<p align="center">
    <a href="https://vtuui.vtuzx.com">
        <img width="100%" src="https://activity.vtuzx.com/doc/vtuui/weapp/head.png">
    </a>
</p>

## 文档
<a href="https://ui.vtuzx.com" target="_blank">https://ui.vtuzx.com</a>

## 体验
使用微信扫一扫体验小程序组件示例

<p align="center">
    <img width="200" src="https://activity.vtuzx.com/doc/vtuui/weapp/minipgQR.jpg">
</p>

## 快速上手
### 使用之前
在开始使用 vtu Weapp 之前，你需要先阅读 [微信小程序自定义组件](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/) 的相关文档。

### 如何使用
到 [GitHub](https://github.com/jisida/VtuWeapp) 下载 Vtu Weapp 的代码，将 `dist` 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例，其它组件在对应的文档页查看：

1. 添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：
```json
"usingComponents": {
    "vtu-btn": "../../dist/button/vtu-btn"
}
```
2. 在 wxml 中使用组件：
```html
<vtu-btn type="primary" bind:click="handleClick">这是一个按钮</vtu-btn>
```

### 预览所有组件
我们内置了所有组件的示例，您可以扫描右侧的小程序码体验，或按以下方式在微信开发者工具中查看：

```shell
# 从 GitHub 下载后，安装依赖
npm install

# 编译组件
npm run dev
```
然后，将 `examples` 目录在微信开发者工具中打开即可。
### 交流
微信群：加入微信群请先添加开发者微信。QQ群：793843513 或扫描二维码。
<p align="center">
    <img max-width="900px" src="https://activity.vtuzx.com/doc/vtuui/weapp/jiaoliu.png">
</p>

### 截图预览
<p align="center">
    <img width="200" src="https://activity.vtuzx.com/doc/vtuui/weapp/md/1.jpg">
    <img width="200" src="https://activity.vtuzx.com/doc/vtuui/weapp/md/2.jpg">
    <img width="200" src="https://activity.vtuzx.com/doc/vtuui/weapp/md/3.jpg">
</p>
<p align="center">
    <img width="200" src="https://activity.vtuzx.com/doc/vtuui/weapp/md/4.jpg">
    <img width="200" src="https://activity.vtuzx.com/doc/vtuui/weapp/md/5.jpg">
    <img width="200" src="https://activity.vtuzx.com/doc/vtuui/weapp/md/6.jpg">
</p>
<p align="center">
    <img width="200" src="https://activity.vtuzx.com/doc/vtuui/weapp/md/7.jpg">
    <img width="200" src="https://activity.vtuzx.com/doc/vtuui/weapp/md/8.jpg">
<img width="200" src="https://activity.vtuzx.com/doc/vtuui/weapp/md/9.jpg">
</p>
<p align="center">
    <img width="200" src="https://activity.vtuzx.com/doc/vtuui/weapp/md/10.jpg">
    <img width="200" src="https://activity.vtuzx.com/doc/vtuui/weapp/md/11.jpg">
    <img width="200" src="https://activity.vtuzx.com/doc/vtuui/weapp/md/12.jpg">
</p>

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, TalkingData
