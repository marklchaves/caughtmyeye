# creating
[ca u g h t  m  y  e ye](https://caughtmyeye.dev) portfolio website on CloudCannon

---

i'm from ohio. i live in bali. these are some pictures with their short stories. mostly 35mm film.

---

## work in progress

i'm migrating my main portfolio on [marklchaves.com](https://marklchaves.com) over to this site. it will be a slow work in progress. 

marklchaves.com is a wordpress site running on siteground. i hope to have that shut down by the end of 2019.

as i write, i just created a photography portfolio on caughtmyeye.dev. the first gallery showcases my photos of **surabaya**--indonesia's second largest city. for this collection, i added some custom code to support _art direction_ responsive web design. this means now i can supply a mobile friendly (portrait) hero that will display by default (mobile first), but will be overridden by it's _landscape_ version on screens `768px` and larger. get on the [live demo on my surabaya gallery](https://caughtmyeye.dev/photography/surabaya/). switch from desktop to mobile. notice how the _becak_ driver stays (partially) in the frame on small devices. without this code, he would be completely hacked out of the screen.

[see the gist, if you are interested.](https://gist.github.com/marklchaves/589cf392b5076d46b5fc0037bff7e74e)

i'll try to do a more complete write-up. maybe even try my first pull request.

---

## about the homepage

### stories

the homepage is kinda sorta like a _family album_. it's mainly by me for me. writing for oneself is actually more liberating than i thought. i probably knew that at one point. but, after years of writing for other people, i guess one forgets. anyway, since i'm writing for me, i think readers will get a more genuine sense of who i am. because all my little quirks, limitations, and faves will be infused through the images i painfully decide to post. i include the back stories for the images. i seldom/rarely share the back story behind my photos. because i always think that people really don't care these days--i.e. swipe, swipe, swipe.

### masonry grid

one weekend back in late june 2019, i stumbled upon an article called [Building a Responsive Portfolio using Jekyll and Masonry](https://kfrankc.com/posts/2019/03/07/jekyll-masonry#result). i decided to code up this site (caughtmyeye.dev originally called creating) that weekend by following kfrankc's instructions. it was fun. there were definitely some hurdles e.g. my first jekyll site, usual environment set up pains, gaps in the instructions, and a interesting bug on window resize (see my fix below).

[gist of modified portfolio-masonry.js to fix window resize issues.](https://gist.github.com/marklchaves/bbd7f88032c67582774fe4f6343f6ff4)

i was pleased with the result. so much so, i recently decided to ditch my wordpress site of less than a year old. i was on format.com for many years before wordpress. i switched to wordpress because i wanted to (re) start web development on my own projects instead of others all the time (i've been a freelance web dev since 2015 and originally a software engineer/manager). you can read more about my motivations to switch in [my write up comparing cloudcannon with wordpress](https://medium.com/@marklchaves/cloudcannon-versus-wordpress-e0ff63fdb4c0).

---

ok enough for now. more later
