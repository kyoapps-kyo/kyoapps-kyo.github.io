---
layout: post
title:  "CSS before、after和多重背景"
subtitle: '给背景图片加上黑点遮罩'
date:   2021-11-23
tags: css html 应用
description: '使用div的before after或者多重背景给本div的背景加上黑点的遮罩'
color: 'rgb(204,204,204)'
cover: '/assets/imgs/common/css.jpeg'
---
![cat](/assets/imgs/common/css.jpeg)

## 说明

最近在网上看到这个感觉很酷:

![cat](/assets/imgs/2021/11/23/tuki.png)
![cat](/assets/imgs/2021/11/23/tuki2.png)

## 借鉴网上代码
查看代码，采用的是before after，尝试自己做一下：
<style>
#contents1 {
  background: url(/assets/imgs/2021/11/22/heng/h1.jpg) no-repeat;
  background-size: cover;
  height:500px;
}
#contents-header {
  background: url(/assets/imgs/2021/11/22/heng/h1.jpg) no-repeat;
  background-size: cover;
}

#contents-header {
  width: 100%;
  height: 500px;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#contents-header::after {
  content: "";
  display: block;
  width: 2500px;
  height: 40px;
  background: url(/assets/imgs/2021/11/23//contents_header_top.png) no-repeat;
  background-size: 2500px auto;
  position: absolute;
  z-index: 2;
  bottom: -30px;
  left: calc((100vw - 2500px)/2);
}

#contents-header::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: url(/assets/imgs/2021/11/23/header_overlay.png) repeat;
  background-size: 2px 2px;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
}


</style>
未加黑点：
<div id="contents1">

</div>
加黑点：
<div id="contents-header">

</div>
代码：

```html
<style>
#contents1 {
  background: url(/assets/imgs/2021/11/22/heng/h1.jpg) no-repeat;
  background-size: cover;
  height:500px;
}
#contents-header {
  background: url(/assets/imgs/2021/11/22/heng/h1.jpg) no-repeat;
  background-size: cover;
}

#contents-header {
  width: 100%;
  height: 500px;
  margin: 100px 0 0;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

#contents-header::after {
  content: "";
  display: block;
  width: 2500px;
  height: 40px;
  background: url(/assets/imgs/2021/11/23//contents_header_top.png) no-repeat;
  background-size: 2500px auto;
  position: absolute;
  z-index: 2;
  bottom: -30px;
  left: calc((100vw - 2500px)/2);
}

#contents-header::before {
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: url(/assets/imgs/2021/11/23/header_overlay.png) repeat;
  background-size: 2px 2px;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
}


</style>

<div id="contents1">

</div>
<div id="contents-header">

</div>
```

## 使用CSS3 多重背景(multiple backgrounds)  控制图片，尝试不使用after和before来实现同样的效果

### 多重背景
也就是CSS2里background的属性外加origin、clip和size组成的新background的多次叠加，缩写时为用逗号隔开的每组值；用分解写法时，如果有多个背景图片，而其他属性只有一个（例如background-repeat只有一个），表明所有背景图片应用该属性值。

语法缩写如下：
```
background ： [background-color] | [background-image] | [background-position][/background-size] | [background-repeat] | [background-attachment] | [background-clip] | [background-origin],...
```
可以把上面的缩写拆解成以下形式：
```
background-image:url1,url2,...,urlN;
background-repeat : repeat1,repeat2,...,repeatN;
backround-position : position1,position2,...,positionN;
background-size : size1,size2,...,sizeN;
background-attachment : attachment1,attachment2,...,attachmentN;
background-clip : clip1,clip2,...,clipN;
background-origin : origin1,origin2,...,originN;
background-color : color;
```
**注意：**

-  用逗号隔开每组 background 的缩写值；
-  如果有 size 值，需要紧跟 position 并且用 "/" 隔开；
-  如果有多个背景图片，而其他属性只有一个（例如 background-repeat 只有一个），表明所有背景图片应用该属性值。
-  background-color 只能设置一个。

<style>
#contents2 {
  background: url(/assets/imgs/2021/11/23//contents_header_top.png) left calc(100% + 60px) no-repeat,url(/assets/imgs/2021/11/23/header_overlay.png) left top/2px 2px repeat ,url(/assets/imgs/2021/11/22/heng/h1.jpg) left top/cover no-repeat;
  height:500px;
}
</style>

<div id="contents2">

</div>

```html
<style>
#contents2 {
  background: url(/assets/imgs/2021/11/23//contents_header_top.png) left calc(100% + 60px) no-repeat,url(/assets/imgs/2021/11/23/header_overlay.png) left top/2px 2px repeat ,url(/assets/imgs/2021/11/22/heng/h1.jpg) left top/cover no-repeat;
  height:500px;
}
</style>

<div id="contents2">

</div>
```