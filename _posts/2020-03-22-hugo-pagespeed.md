---
title: Hugo PageSpeed Results
date: 2020-04-22
description: "Hugo Framework's Google PageSpeed Results"
categories:
  - performance
tags:
  - pagespeed
  - hugo
header:
  teaser: /assets/images/blog/bali-ubud-pasar-jalan2-cowok2-sepeda-motor-300w.webp
  overlay_image: /assets/images/blog/bali-ubud-pasar-jalan2-cowok2-sepeda-motor-1280w.webp
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "everyday bali by mark l chaves"
swiper: true;
blog: true;
excerpt_separator: <!--more-->
---
## What is Hugo? 

Hugo is a SSG written in the [Go programming language](https://golang.org/). <!--more-->Go is a language designed at Google.

### Demo Criteria

When I'm shopping for a site builder, page builder, or theme for my clients I always look at the demo sites.

For this speed test, I selected a Hugo theme demo site that was:

1. Updated recently.
2. Looks contemporary.
3. Classified as fast.
4. Classified as minimal.

[Meghna Hugo](https://themes.gohugo.io/meghna-hugo/) is tagged as fast and minimal. It looks nice. It was updated on 21 March 2020. Dude, that was like yesterday (this post was originally published 22 March 2020). So, I ran with that.

## Results

According to [gohugo.io](https://gohugo.io/), Hugo is

<blockquote>The world’s fastest framework for building websites</blockquote>

OK. It might be the fastest framework for building sites. Let's check what Google PageSpeed thinks about Hugo's site speed.

---

### Hugo Demo Test

<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Mobile<img src="/assets/images/performance/hugo-demo-PageSpeed-mob-22mar2020.webp"></div>
        <div class="swiper-slide">Desktop<img src="/assets/images/performance/hugo-demo-PageSpeed-dt-22mar2020.webp"></div>
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

## GoHugo.io Test

Now, let's look at [gohugo.io]() itself. It's the official Hugo website. Yes. It's built with Hugo. I checked.

<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Mobile<img src="/assets/images/performance/gohugio-io-PageSpeed-mob-24apr2020.webp"></div>
        <div class="swiper-slide">Desktop<img src="/assets/images/performance/gohugio-io-PageSpeed-dt-24apr2020.webp"></div>
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

<a name="benchmark"></a>

## Benchmark

Let's hold my _official_ site as the benchmark. My site is powered by [GatsbyJS](https://www.gatsbyjs.org/) on [Netlify](https://www.netlify.com/).

<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Mobile<img src="/assets/images/performance/cme-cc-PageSpeed-mob-23mar2020.webp"></div>
        <div class="swiper-slide">Desktop<img src="/assets/images/performance/cme-cc-PageSpeed-dt-23mar2020.webp"></div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>

## Conclusion

Which is the more "fair" assessment of Hugo's PageSpeed test? Would the demo sites or the official site be the better _litmus_ test?

It's hard to say. There are countless factors involved with how websites perform. IMHO, I believe **demo** sites will be closer to the truth. Why? Because the way they're developed is probably closer to how most sites are built. This is coming from experience. 

When I run into an exceptionally fast site that's also well designed, I always wonder about their budget. I wonder if they had a loftier budget to spend on performance&mdash;compared to us _mortals_.

At any rate, I feel there are two takeaways here.

1. If you're in the business of **making** page builders, site builders, or themes, then make sure your demo sites are fast. They might be the only sites that people (like me) have to evaluate your credibility.
1. If you are **shopping** around for a site builder, page builder, or theme, then you should run [speed tests](https://developers.google.com/speed/pagespeed/insights/) on the demo sites. These demos supposedly _showcase_ the best work of the designer/developer.

Thanks for reading!

## Credits

Sliders courtesy of [Swiper](https://swiperjs.com/).

---