# bgrem #

## 安装 ##

#### bgrem 安装 ####
```$
npm i bgrem
```	

## 使用 ##

BGRem 对外暴露 init 方法，支持传入三个参数
- psdWidth - psd 稿宽(默认 720)
- fontSize - html 默认 font-size 大小(默认 50)
- times - psd 稿放大倍数(开发时以 360 为宽，所以默认放大倍数为 2)

因为安卓的 psd 稿都是以 720 为宽，开发时以 360 为宽。所以提供了两种引入方案

#### 简易引入 ####

使用前提: psd 稿宽为 720(非 720 的可将 psd 等比例缩放),

```js
var BGRem = require('bgrem');

BGRem.init();
```

这样 psd 稿里元素的大小，除以 100，即为它的 css 样式大小。比如一个 icon 在 psd 稿里的大小是 80 x 80, 则 css 里的样式为
```
.icon {
	width: 0.8rem;
	height: 0.8rem;
}
```
#### 自定义引入 ####

假设 psd 稿宽度为 1080, 放大倍数为 3, 想同上面一样以 psd 稿元素大小除以 100 作为 css 样式大小的话，则调用如下

```js
var BGRem = require('bgrem');

BGRem.init(1080, 100/3, 3);
```
