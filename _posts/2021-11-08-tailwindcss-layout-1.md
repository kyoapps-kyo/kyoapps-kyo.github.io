---
layout: post
title:  "Tailwindcss学习(1)"
subtitle: '绝对布局里控制元素居中的方法'
date:   2021-11-08
tags: tailwindcss layout 居中 Relative Absolute transform translate
description: '如何用tailwindcss控制元素居中。'
color: 'rgb(90,122,25)'
cover: '/assets/imgs/2021/11/08/layout1.png'
---
![cat](/assets/imgs/2021/11/08/layout1.png)

#### 在线练习地址

[tailwindcss 在线练习][tailwindcss]

[tailwindcss]: https://play.tailwindcss.com/

#### 布局要点

在子元素上使用`top-1/2`和`left-1/2`时，发现只有只有元素的起始位置在中间点上，查阅文档，发现需要配合`translate` - 平移使用。

在使用`translate`时需要添加`transform`功能类启动变换。

测试代码如下

```html
<div class="relative bg-green-300 h-96 w-96">
  parant div
  <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">child 1</div>
  <div class="absolute top-0 left-0 border border-red-500 h-1/2 w-1/2"></div>
</div>
```

![cat](/assets/imgs/2021/11/08/layout2.png)
