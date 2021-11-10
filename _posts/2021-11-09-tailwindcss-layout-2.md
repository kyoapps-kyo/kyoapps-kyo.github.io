---
layout: post
title:  "Tailwindcss学习(2) - 用fixed固定navbar"
subtitle: 'fixed定位navbar置顶的用法'
date:   2021-11-09
tags: tailwindcss layout fixed
description: '使用tailwindcss控制导航栏始终置顶'
color: 'rgb(28,152,90)'
cover: '/assets/imgs/2021/11/09/tailwindcss-logotype.png'
---
![cat](/assets/imgs/2021/11/09/tailwindcss-logotype.png)

#### 在线练习地址

[tailwindcss 在线练习][tailwindcss]

[tailwindcss]: https://play.tailwindcss.com/

#### 布局要点

将fixed添加到navbar的class中后，发现样式改变了，查阅文档看到

> 使用 `fixed` 来定位一个元素相对于浏览器窗视口的位置。
>
> 偏移量是相对于视口计算的，且该元素将作为绝对定位的子元素的位置参考。

所以这时，需要添加`top-0`，将`nav`置顶。

`nav`下面的内容会因为`nav`脱离了文档流，会自动向上移动，所以要添加对应的`mt`。

测试代码如下

```html
<nav class="fixed bg-green-300 h-40 w-full top-0 flex justify-between flex-wrap content-center">
  <div class="pl-2">left</div>
  <div class="">navbar</div>
  <div class="pr-2">right</div>
</nav>
<div class="h-96 w-full bg-red-500 mt-44"></div>
<div class="h-96 w-full bg-yellow-500 mt-10"></div>
<div class="h-96 w-full bg-blue-500 mt-44"></div>
```

![cat](/assets/imgs/2021/11/09/code1.png)
