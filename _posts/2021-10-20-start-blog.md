---
layout: post
title:  "博客使用的md插件之jekyll-toc"
subtitle: 'jekyll-toc 用法说明'
date:   2021-10-20
tags: 技术 解决博客问题 博客插件
description: ''
color: 'rgb(30,144,255)'
cover: '/assets/imgs/2021-10-20-pic.webp'
---

![cat](/assets/imgs/2021-10-20-pic.webp)

### 插件介绍

插件地址：[jekyll-toc]

[jekyll-toc]: https://github.com/kyoapps-kyo/jekyll-toc

GitHub Pages 无法运行自定义 Jekyll 插件，因此在生成目录 (TOC) 时，您只能使用 JavaScript 解决方案或使用 kramdown 的 {:toc} 选项。

该插件可以“**快速地**”生成符合当前网页布局的目录，下文将介绍如何使用它。

#### 中文使用说明

1. 从最新版本或 master 分支下载 <u>" toc.html "</u> 文件

2. 将该文件放入博客项目的<u>" _includes "</u> 文件夹中。

3. 将如下代码加入项目<u>" _layouts "</u>文件夹中的<u>" post.html "</u>文件的**" page.content "**上方。

   ```ruby
     <!--  引入toc目录  -->
   { % include toc.html html=content % }
   ```
   
添加完之后，无需在markdown文件中使用toc标签，即可自动增加文章目录。
