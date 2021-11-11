---
layout: post
title:  "Tailwindcss学习(4) - 排版 - 垂直对齐"
subtitle: '文字垂直对齐 align解惑'
date:   2021-11-10
tags: tailwindcss 排版 垂直对齐 align 
description: '使用align时需要注意的坑'
color: 'rgb(111,110,110)'
cover: '/assets/imgs/2021/11/10/tailwindcss-logotype.png'
---
![cat](/assets/imgs/2021/11/10/tailwindcss-logotype.png)

[tailwindcss 在线练习][tailwindcss]

[tailwindcss]: https://play.tailwindcss.com/

## 使用场合

在制作`navbar`时候，发现左侧`div`内文字无法与右侧`div`内的文字底部对齐，阅读文档之后尝试采用`align`来解决，发现不能很好解决不同`div`之间的文字对齐问题，最后改用`flex`的items-center居中元素，之后使用`padding`调节文字的位置。

所以个人感觉`align`一般用于`div`内部行内元素的文字垂直对齐上。

接下来尝试验证自己的想法。

## 文档解读

在tailwindcss中，可以通过下面5个类控制文字垂直对齐的位置：

- `align-`
- - `top`
  - `middle`
  - `bottom`
  - `text-top`
  - `text-bottom`

在`css`中的定义是：

```css
.align-top {
  vertical-align: top;
}

.align-text-top {
  vertical-align: text-top;
}
```

`vertical-align`属性：

> 定义行内元素的基线相对于该元素所在行的基线的垂直对齐。

！用于**行内元素**

## 尝试代码

块元素之间的文字对齐互不影响，同时也可以在父元素上用`leading`控制行高来控制文字的上下位置。

```html
<div class="bg-red-500 w-full flex justify-between py-2">
  <div class="h-16 bg-yellow-300 ml-5 px-2">
    <div class="h-10 bg-green-300 inline-block">相对于此</div>
    <span class="align-top bg-green-200">top</span>
    <span class="align-middle bg-green-200">middle</span>
    <span class="align-bottom bg-green-200">bottom</span>
    <span class="align-text-top bg-green-200">text-top</span>
    <span class="align-text-bottom bg-green-200">text-bottom</span>
  </div>
  <div class="bg-green-400 px-2 text-white">
    <div class="h-14 bg-blue-700 inline-block text-xl">相对于此</div>
    <span class="align-top bg-blue-500">top</span>
    <span class="align-middle bg-blue-500">middle</span>
    <span class="align-bottom bg-blue-500">bottom</span>
    <span class="align-text-top bg-blue-500">text-top</span>
    <span class="align-text-bottom bg-blue-500">text-bottom</span>
  </div>
  <div class="h-16 bg-yellow-300 ml-5 px-2 leading-10 mr-4">
    <div class="h-10 bg-green-400 inline-block">line-height</div>
    <a href="" class="bg-green-400">right</a>
  </div>
</div>

```
![cat](/assets/imgs/2021/11/10/code1.png)

## 结论

在块元素内部，无法使用`align`统一各个子块元素内部的行内元素的对齐。

`align`只能使用于同一个块元素内部的文字对齐。

相互独立的块元素需要采用其他的布局方式来调整位置。
