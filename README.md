# c a u g ht my e y e
[c a u g ht my e y e](https://caughtmyeye.dev) portfolio website for mark l chaves on CloudCannon

---

I'm from ohio. I live in Bali. These are some pictures with their short stories. Mostly 35mm film.

---

## work in progress

I'm migrating my main portfolio on [marklchaves.com](https://marklchaves.com) over to this site. It will be a slow work in progress. 

marklchaves.com is a WordPress site running on SiteGround. I hope to have that shut down by the end of 2019.

as I write, I just created a photography portfolio on caughtmyeye.dev. the first gallery showcases my photos of **surabaya**--indonesia's second largest city. for this collection, I added some custom code to support _art direction_ responsive web design. this means now I can supply a mobile friendly (portrait) hero that will display by default (mobile first), but will be overridden by it's _landscape_ version on screens `768px` and larger. Get on the [live demo on my surabaya gallery](https://caughtmyeye.dev/photography/surabaya/). Switch from desktop to mobile. notice how the _becak_ driver stays (partially) in the frame on small devices. Without this code, he would be completely hacked out of the screen.

[see the gist, if you are interested.](https://gist.github.com/marklchaves/589cf392b5076d46b5fc0037bff7e74e)

I'll try to do a more complete write-up. Maybe even try my first pull request.

---

## about the homepage

### stories

The homepage is kinda sorta like a _family album_. It's mainly by me for me. writing for oneself is actually more liberating than I thought. I probably knew that at one point. But, after years of writing for other people, I guess one forgets. anyway, since i'm writing for me, I think readers will get a more genuine sense of who I am. Because all my little quirks, limitations, and faves will be infused through the images I painfully decide to post. I include the back stories for the images. I seldom/rarely share the back story behind my photos. because I always think that people really don't care these days--i.e. swipe, swipe, swipe.

### masonry grid

One weekend back in late june 2019, I stumbled upon an article called [Building a Responsive Portfolio using Jekyll and Masonry](https://kfrankc.com/posts/2019/03/07/jekyll-masonry#result). I decided to code up this site (caughtmyeye.dev originally called creating) that weekend by following kfrankc's instructions. It was fun. There were definitely some hurdles e.g. my first jekyll site, usual environment set up pains, gaps in the instructions, and a interesting bug on window resize (see my fix below).

[Gist of modified portfolio-masonry.js to fix window resize issues.](https://gist.github.com/marklchaves/bbd7f88032c67582774fe4f6343f6ff4)

I was pleased with the result. so much so, I recently decided to ditch my wordpress site of less than a year old. I was on format.com for many years before wordpress. I switched to wordpress because I wanted to (re) start web development on my own projects instead of others all the time (i've been a freelance web dev since 2015 and originally a software engineer/manager). You can read more about my motivations to switch in [my write up comparing CloudCannon with WordPress](https://medium.com/@marklchaves/cloudcannon-versus-wordpress-e0ff63fdb4c0).

---

OK enough for now. More later.
