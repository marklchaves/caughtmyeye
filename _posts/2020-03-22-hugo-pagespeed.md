---
title: Hugo PageSpeed Results
date: 2020-03-22
description: "Hugo Framework's Google PageSpeed Results"
categories:
  - performance
tags:
  - pagespeed
  - hugo
image: /assets/images/blog/bali-ubud-pasar-jalan2-cowok2-sepeda-motor-1280w.jpg
header:
  overlay_image: /assets/images/blog/bali-ubud-pasar-jalan2-cowok2-sepeda-motor-1280w.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "everyday bali by mark l chaves"
swiper: true;
blog: true;
excerpt_separator: <!--more-->
---
## What is Hugo

Hugo is a SSG written in the [Go programming language](https://golang.org/). Go is a language designed at Google.
<!--more-->

### Demo Criteria

I selected a Hugo theme demo site that was:

1. Updated recently.
2. Looks contemporary.
3. Classified as fast.
4. Classified as minimal.

[Meghna Hugo](https://themes.gohugo.io/meghna-hugo/) is tagged as fast and minimal. It looks nice. It was updated on 21 March 2020. Dude, that was like yesterday. So, I ran with that.

## Results

According to [gohugo.io](https://gohugo.io/), Hugo is

<blockquote>The world’s fastest framework for building websites</blockquote>

Let's see what Google PageSpeed thinks.

---

<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Mobile<img src="/assets/images/performance/hugo-demo-PageSpeed-mob-22mar2020.png"></div>
        <div class="swiper-slide">Desktop<img src="/assets/images/performance/hugo-demo-PageSpeed-dt-22mar2020.png"></div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>

---

Let's hold my site as the benchmark.


<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Mobile<img src="/assets/images/performance/cme-cc-PageSpeed-mob-15mar2020.png"></div>
        <div class="swiper-slide">Desktop<img src="/assets/images/performance/cme-cc-PageSpeed-dt-15mar2020.png"></div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>
