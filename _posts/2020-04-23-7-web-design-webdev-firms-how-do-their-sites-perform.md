---
title: 7 Web Design & Development Firms - How do Their Sites Perform?
date: 2020-04-23
description: ""
categories:
  - performance
tags:
  - pagespeed
  - webdesign
  - webdev
header:
  teaser: /assets/images/blog/bali-payogan-pohon-kelapa-sendiri-300w.jpg
  overlay_image: /assets/images/blog/bali-payogan-pohon-kelapa-sendiri-1280w.jpg
  overlay_filter: 0.5 # same as adding an opacity of 0.5 to a black background
  caption: "bali's early morning light by mark l chaves"
swiper: true;
blog: true;
excerpt_separator: <!--more-->
ratings:
  - title: "Americaneagle.com"
    tagline: "Web Design, Web Development &amp; Digital Marketing Expertise"
    platform: SiteInfinity
    mobscore: 5
    dtscore: 35
    mobscreengrab: 0americaneagle-web-design-PageSpeed-mob-23apr2020.jpg
    dtscreengrab: 0americaneagle-web-design-PageSpeed-dt-23apr2020.jpg
  - title: "Wolf &amp; Key"
    tagline: "Strategy. Engagement. Storytelling."
    platform: "WordPress Salient (yet Salient's own site is on GeneratePress)"
    mobscore: 15
    dtscore: 61
    mobscreengrab: 1wolfandkey-marketing-PageSpeed-mob-27mar2020.jpg
    dtscreengrab: 1wolfandkey-marketing-PageSpeed-dt-27mar2020.jpg
  - title: "RedesignPage"
    tagline: "Simple &amp; Conscious Design"
    platform: Wix
    mobscore: 24
    dtscore: 61
    mobscreengrab: 2redesignpage-PageSpeed-mob-14mar2020.jpg
    dtscreengrab: 2redesignpage-PageSpeed-dt-14mar2020.jpg
  - title: "Naik Kreatif"
    tagline: "Increase Your Digital Branding Asset"
    platform: Unknown
    mobscore: 27
    dtscore: 55
    mobscreengrab: 3naikkreatif-PageSpeed-mob-14apr2020.jpg
    dtscreengrab: 3naikkreatif-PageSpeed-dt-14apr2020.jpg
  - title: "Chris Lema"
    tagline: "How Can I Help You Do WordPress Better?"
    platform: WordPress Astra
    mobscore: 44
    dtscore: 91
    mobscreengrab: 4astra-chrislema-PageSpeed-mob-2mar2020.jpg
    dtscreengrab: 4astra-chrislema-PageSpeed-dt-2mar2020.jpg
  - title: "Antikode"
    tagline: "Make your Mobile App & Website cut above the rest."
    platform: unknown
    mobscore: 57
    dtscore: 89
    mobscreengrab: 5antikode-PageSpeed-mob-14apr2020.jpg
    dtscreengrab: 5antikode-PageSpeed-dt-14apr2020.jpg
  - title: "Sara Soueidan"
    tagline: "Remote independent UI engineer helping brands build modern, resilient, and inclusive user interfaces"
    platform: Hugo
    mobscore: 96
    dtscore: 98
    mobscreengrab: 6sarasoueidan-PageSpeed-mob-23apr2020.jpg
    dtscreengrab: 6sarasoueidan-PageSpeed-dt-23apr2020.jpg
---
## Mobile-First

Ever since Google announced on July 1, 2019 that mobile-first <!--more-->indexing will take priority over desktops, I've been interested in site speed. I've been taking random [Google PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) samples since June 2019. Only recently, I've started sharing these reports.

In this post, we're gonna look at web design and web developer sites. I chose seven firms that I've stumbled upon from either working with clients or doing SEO research.

## Does Your Web Designer/Developer Care How Fast Their Site Loads? 

The idea behind this report is _simple_. If your web designer or web developer cares about how fast their site loads on mobile, then chances are they'll care about your site's mobile performance.

### The Ratings

For each site, I list the
- name
- tagline
- platform
- PageSpeed scores
- PageSpeed screengrabs

Here are the PageSpeed scores ordered by the slowest rating (1) to the fastest (7). 

---

{% for rating in page.ratings %}

## Rating {{ forloop.index }}: {{ rating.title }}

> {{ rating.tagline }}

Platform: {{ rating.platform }}

### PageSpeed Insights Scores

Mobile | Desktop
------ | -------
{{ rating.mobscore }} | {{ rating.dtscore }}

<!-- Slider main container -->
<div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide">Mobile<img src="/assets/images/performance/{{ rating.mobscreengrab }}"></div>
        <div class="swiper-slide">Desktop<img src="/assets/images/performance/{{ rating.dtscreengrab }}"></div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
</div>

{% endfor %}

---

## Conclusion

I feel there are two takeaways here. And, they are similar to my previous post on [Hugo's PageSpeed scores](/performance/hugo-pagespeed/).

1. If you are in the business of **making** websites, then you might want to tune your own site for mobile-first performance.
2. If you are **shopping** around for a web designer or a web developer, then you should run [speed tests](https://developers.google.com/speed/pagespeed/insights/) on their sites for good _measure_. IMHO, their sites should _showcase_ what they care about.

Thanks for reading!

---

### Wanna geek-out on your site speed? 

[Let's talk](https://www.caughtmyeye.cc/)!

Should you check my site's performance first? Absolutely! Here's my [showcase site's benchmark](/performance/hugo-pagespeed#benchmark). 

---

## Credits

Sliders courtesy of [Swiper](https://swiperjs.com/).

---