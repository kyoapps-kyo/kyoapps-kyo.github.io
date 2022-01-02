---
layout: post
title: "CSS background中的渐变"
subtitle: "linear-gradient()"
date: 2021-12-31
tags: css
description: "background linear-gradient()"
color: "rgb(110,51,255)"
cover: "/assets/imgs/common/css.jpeg"
---

<style>
.div90deg {
    width: 300px;
    height: 300px;
    background: linear-gradient(90deg,#02a0ff,red);
}
.div135deg {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg,#02a0ff,red);
}
.div180deg {
    width: 300px;
    height: 300px;
    background: linear-gradient(180deg,#02a0ff 20%,red 80%);
}
.div180deg2 {
    width: 300px;
    height: 300px;
    background: linear-gradient(180deg,#02a0ff 60%,red 20%);
}
.box {
    position: relative;
    width: 500px;
}
.box img{
    display: block;
}
.linear_box{
    width: 280px;
    height: 100%;
    position:absolute;
    right:0;
    top:0;
    background: linear-gradient(135deg,transparent 50%,red 50%);
}
</style>

linear-gradient() 函数用于创建一个线性渐变的 "图像"

它的语法是

```css
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

**direction**

用角度值指定渐变的方向

方向值：常用的是 `to top`，`to bottom`，`to left`，`to right`，`to right top` 等等

角度值：常用的是 `0deg`、`180deg` 等等

`color-stop1`

`color`

使用关键字 `red`、`rgba` 等颜色值（透明也可以设置）

`stop`

是这个颜色块终止位置，换句话说就是这块颜色占的区域

ps：颜色值至少两个

**角度值**

先来看看文档的图画

<img src="/assets/imgs/2022/01/deg.png">

0deg 不是按我们数学的角度向右定义的，默认方向是向上的，是从方向北开始的，所以北才是 0deg

当为 90deg 时，渐变线的方向相当于 to right，从左指向右

<div class="div90deg"></div>
```html
<style>
.div0deg {
    width: 300px;
    height: 300px;
    background: linear-gradient(90deg,#02a0ff,red);
}
</style>
<div class="div90deg"></div>
```

当为 135deg 时，渐变线的方向相当于 to right bottom，从左上指向右下，相反为-135 时，就从右上指向左下

<div class="div135deg"></div>
```html
<style>
.div135deg {
    width: 300px;
    height: 300px;
    background: linear-gradient(135deg,#02a0ff,red);
}
</style>
<div class="div135deg"></div>
```

**颜色-终止位置**
该值由一个<color>值组成，后跟一个可选的停止位置

以上两种情形是颜色渐变，占的区域非常均匀，相当于 background: linear-gradient(-135deg,#02a0ff 0%,red 100%)，都是从 0-100%的比例结束的

所以这个区域是可以修改的

<div class="div180deg"></div>

如上图，修改了参数

```html
<style>
  .div180deg {
    width: 300px;
    height: 300px;
    background: linear-gradient(180deg, #02a0ff 20%, red 80%);
  }
</style>
<div class="div180deg"></div>
```

20%相当于第一个颜色的区域，顶部的 20%和底部的 20%并没有渐变，所以我们可以理解颜色 1 的 20%为开始位置，颜色 2 的 80%为结束位置。

我们将颜色 1 的值改成大于后面颜色的值，得到以下结果
```css
background: linear-gradient(180deg,#02a0ff 60%,red 20%);
```
<div class="div180deg2"></div>
颜色1和颜色2直接就没有产生阴影了，所以阴影产生是在区间里面的

做一个三角形覆盖图片

<div class="box">
<div class="linear_box">
</div>
<img src="/assets/imgs/common/css.jpeg">
</div>

```html
<style>
.box {
    position: relative;
    width: 500px;
}
.box img{
    display: block;
}
.linear_box{
    width: 280px;
    height: 100%;
    position:absolute;
    right:0;
    top:0;
    background: linear-gradient(135deg,transparent 50%,red 50%);
}
</style>
<div class="box">
<div class="linear_box">
</div>
<img src="/assets/imgs/common/css.jpeg">
</div>
```