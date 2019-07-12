# bgrem #

bgrem 主要用于设置 body 的 font-size，在页面初始化以及页面尺寸变更的时候，会自动设置 body 的 font-size。
PS: 由于 rem 更加适用于移动端，所以对屏幕宽度 > 500px 的页面我们将不予处理。

## 安装 ##

#### bgrem 安装 ####
```$
npm i bgrem
```	

## 使用 ##

BGRem 对外暴露 init 方法，支持传入两个参数
- psdWidth - psd 稿宽(默认  360)
- fontSize - 当页面宽度和 psd 稿宽度一致时 html 默认的 font-size 大小(默认 100)

```js
var BGRem = require('bgrem');

BGRem.init();
```

####  进阶使用 ####

我们 font-size 默认为 100px 的原因是为了方便计算。因为当 1rem = 100px 时，一个宽高均为 40px 的元素我们可以很方便快捷的转化为 0.4rem x 0.4rem。

但如果接入方设计稿不是 360px，或者当页面宽度和 psd 稿宽度一致时 html 默认的 font-size 大小不想设置为 100px 时，我们可以通过 init 方法的参数来改变

```js
// 假设 psd 稿宽度为 720,  并且希望页面宽度和 psd 稿宽度一致时 html 默认的 font-size为 50px
var BGRem = require('bgrem');

BGRem.init(720, 50);
```

## 配合插件实现自动换算

如果你是用 webpack 进行构建，我们可以配合 [postcss-plugin-px2rem](https://github.com/pigcan/postcss-plugin-px2rem) 插件实现 px 自动换算为 rem。也就是说，当 1rem = 100px 时，一个宽高均为 40px 的元素我们在写 css 样式的时候，仍然可以直接用 px 单位写，webpack 构建后自动转化为 rem。
```css
// 开发时书写样式
.test-dom {
  width: 40px;
  height: 40px;
}

// webpack 构建后样式
.test-dom {
  width: 0.4rem;
  height: 0.4rem;
}
```

