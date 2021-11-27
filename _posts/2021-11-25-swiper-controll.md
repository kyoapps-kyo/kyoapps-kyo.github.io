---
layout: post
title:  "swiper自动播放大图联动"
subtitle: 'swiper自动轮播图片'
date:   2021-11-25
tags: swiper
description: 'swiper controller双层展示图片'
color: 'rgb(204,204,204)'
cover: '/assets/imgs/common/swiper.png'
---
![cat](/assets/imgs/common/swiper.png)

<script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>

<script>
//オプションの定義（初期化の式より先に記述）
let options = {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    hideOnClick: true,
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
};
 
//上記オプションを使って初期化
let mySwiper = new Swiper ('.swiper', options);
</script>
<style>
.swiper {
  max-width: 500px;
  margin: 30px 0;
}
 
:root {
  --swiper-navigation-color: #ffffff;
  --swiper-pagination-color: #ffffff;
}
</style>
<!-- スライダーのメインコンテナの div 要素（必須） -->
<div class="swiper">
  <!-- スライドを囲む div 要素（必須） -->
  <div class="swiper-wrapper">
    <!-- それぞれのスライドの div 要素（必須） -->
    <div class="swiper-slide">1</div>
    <div class="swiper-slide">2</div>
    <div class="swiper-slide">3</div>
  </div>
  <!-- ページネーションの div 要素（省略可能） -->
  <div class="swiper-pagination"></div>
 
  <!-- ナビゲーションボタンの div 要素（省略可能） -->
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
 
  <!-- スクロールバーの div 要素（省略可能） -->
  <div class="swiper-scrollbar"></div>
</div>  