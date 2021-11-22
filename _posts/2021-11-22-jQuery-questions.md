---
layout: post
title:  "Laravel 常见问题集"
subtitle: 'Laravel 常见问题集'
date:   2021-11-22
tags: jQuery 问题 laravel
description: 'Laravel 常见问题集'
color: 'rgb(93,12,34)'
cover: '/assets/imgs/2021/11/22/jQuery.png'
---
![cat](/assets/imgs/2021/11/22/jQuery.png)

## 说明

日常碰到的问题，及解决办法，保持更新。

## jQueryを使う方法

> 使用laravel mix 引入jQuery文件

```
npm install jquery --save
```

`**webpack.mix.js**`

```php
//autoload( {"jquery": [ '$', 'window.jQuery' ] } )を追加

mix.js( 'resources/js/app.js', 'public/js' ).autoload( {
    "jquery": [ '$', 'window.jQuery' ],
} ).postCss( 'resources/css/app.css', 'public/css', [
    require( 'postcss-import' ),
    require( 'tailwindcss' ),
    require( 'autoprefixer' ),
] );
```

动作确认：

`**resources/js/sample.js**`

```javascript
$( function ()
{
    console.log('run jquery');
} )
```

`**webpack.mix.js**`

```php
//.js( 'resources/js/sample.js', 'public/js' )を追加

mix.js( 'resources/js/app.js', 'public/js' ).js( 'resources/js/sample.js', 'public/js' ).autoload( {
    "jquery": [ '$', 'window.jQuery' ],
} ).postCss( 'resources/css/app.css', 'public/css', [
    require( 'postcss-import' ),
    require( 'tailwindcss' ),
    require( 'autoprefixer' ),
] );
```

```
// cd プロジェクト
npm run dev
```

在浏览器的console中出现run jquery表示成功。

## 引入Swiper插件

npm的情况：

```
npm install swiper
```

新建`resources/js/swiper.js`文件，用于初始化插件：

```javascript
 // import Swiper JS
import Swiper, { Navigation, Pagination ,Autoplay} from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

 // configure Swiper to use modules
Swiper.use([Navigation, Pagination, Autoplay]);

 // init Swiper:
const swiper = new Swiper('.swiper', {
// Optional parameters
// direction: 'vertical',
loop: true,

 // If we need pagination
pagination: {
el: '.swiper-pagination',
},

// Navigation arrows
navigation: {
nextEl: '.swiper-button-next',
prevEl: '.swiper-button-prev',
},

// And if we need scrollbar
scrollbar: {
el: '.swiper-scrollbar',
},
});
```

新建`resources/css/swiper.css`用于调整插件的样式：

```css
.swiper {
height: 300px;
}
```

在app.cssで**@import “swiper”;** を追加

```css
@import 'swiper';
```

在`**webpack.mix.js**`中：

```php
.js('resources/js/swiper.js', 'public/js')
```

```
npm run dev
```

在要使用的网页中引用`swiper.js`文件

```html
<script src="{{ mix('js/swiper.js') }}"></script>
```

在网页中的使用方法：

```html
<!-- Slider main container -->
<div class="swiper">
  <!-- Additional required wrapper -->
  <div class="swiper-wrapper">
    <!-- Slides -->
    <div class="swiper-slide">Slide 1</div>
    <div class="swiper-slide">Slide 2</div>
    <div class="swiper-slide">Slide 3</div>
  </div>
  <!-- If we need pagination -->
  <div class="swiper-pagination"></div>

  <!-- If we need navigation buttons -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>

  <!-- If we need scrollbar -->
  <div class="swiper-scrollbar"></div>
</div>
```

参考文章：[カルーセル表示を簡単にswiper.jsを利用して実装する方法][swiper-link]

[swiper-link]:https://masa-engineer-blog.com/carousel-slide-display-with-swiperjs/#toc4
