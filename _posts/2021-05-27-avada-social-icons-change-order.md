---
title: Change the Order of Social Icons in Avada
date: 2021-05-27
description: "How to change the order of social media links in the Avada theme."
categories:
  - css
tags:
  - avada
  - theme
  - socialmedia
  - css
  - flex
  - flexbox
  - wordpress
header:
  teaser: /assets/images/writing/bali-cocomoku-ipad-rina-1-1280w.webp
  overlay_image: /assets/images/writing/bali-cocomoku-ipad-rina-1-1280w.webp
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "tara on her ipad somewhere in bali by mark l chaves"
swiper: true;
blog: true;
excerpt_separator: <!--more-->
---
## The Secret: Flex

What is **flex**?

Flex is short for flexbox. Flexbox is short for the **Flexible Box Module** in CSS.
<!--more-->

So, the secret to (visually) changing the order of HTML elements is to use `display: flex` on the parent container first. Then, add the `order` attribute to order each child element in that container.

It's probably easier to understand by looking at the code. You'll also realise how easy it is to reorder elements using only CSS.

## The Code

```css
/* Parent Container */
.fusion-social-networks-wrapper {
  display: flex;
  justify-content: center;
}

/* Children  of Parent Container */

.fusion-icon-facebook {
  order: 4;
}

.fusion-icon-twitter {
  order: 3;
}

.fusion-icon-instagram {
  order: 2;
}

/* 
   No need to set YouTube to #1. 
   It will display first by itself. 
 */

```

## The Before and After

Using the [ThemeFusion Community Forum](https://theme-fusion.com/community-forum/) page as an example, we'll change the order of social icons in the footer area.

The original order is:

1. Facebook
2. Twitter
3. Instagram
4. YouTube

Swipe the slider below to the left or right to see the before and after.

<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Before<img src="/assets/images/blog/theme-fusion-socials-before.webp"></div>
        <div class="swiper-slide">After<img src="/assets/images/blog/theme-fusion-socials-after.webp"></div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    -->

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>

<br>

Did you notice the difference?

You got it! When you apply the CSS code above, you'll get the reverse order:

1. YouTube
2. Instagram
3. Twitter
4. Facebook

Learn how to [add custom CSS to WordPress](https://theme-fusion.com/community-forum/) if you don't know how to yet. Don't worry, adding CSS to Avada is covered.

Thanks for reading!

## Credits

Sliders courtesy of [Swiper](https://swiperjs.com/).

I used Avada by ThemeFusion as an example because the topic of this post began in the Avada community forum.

I have no affiliation with Swiper or ThemeFusion.

---