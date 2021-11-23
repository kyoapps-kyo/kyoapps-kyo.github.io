---
layout: post
title:  "jQuery 常见问题集"
subtitle: 'jQuery 常见问题集'
date:   2021-11-23
tags: jQuery 问题
description: 'jQuery 常见问题集'
color: 'rgb(204,204,204)'
cover: '/assets/imgs/common/jQuery.png'
---
![cat](/assets/imgs/common/jQuery.png)

## jquery.js 3.0报错， Uncaught TypeError: url.indexOf is not a function

jQuery升级到3.0.0后类型错误:

> jquery.js:9612 Uncaught TypeError: url.indexOf is not a function

这个错误是由于调用了`load`函数导致的错误

把代码里调用load函数的方式

```javascript
$(window).load(function() { ... });
```

改为

```javascript
$(window).on('load', function() { ... });
```

**注意**：`.load(), .unload(), and .error()`从jQuery 1.8开始就被废弃了，换成使用`.on()`函数来注册.
