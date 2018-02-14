---
layout: post
title:  Compressing with WebP
subtitle: Using WebP to improve performance
description: WebP can be used to compress files losslessly for better site performance
date:   2017-09-27 22:05:00
categories: tutorial post
featured-image: /images/posts/2017-09-27-before.png
thumbnail-image: /images/posts/2017-09-27-before.png
comments: true
author: Devin Matte
author-image: /images/devinmatte.jpg
author-bio: Second Year Software Engineering Student at Rochester Institute of Technology
---

One of the biggest bottlenecks for everyday sites, are images. 
When you run a [chrome audit](https://developers.google.com/web/updates/2017/05/devtools-release-notes) now, one of the biggest hits on performance, is your images. 
Images are treated like render blocking assets by a lot of browsers. 
Which means, your page is going to appear as though it's taking longer to load while it waits on images.

You know what it's like when you visit a page and the page loads, before the image in the background, and you watch the white transition away to reveal the image.
That's not really ideal. 
The faster your page loads, the better for your users, which in turn is better for your page views.

![Before WebP](/images/posts/2017-09-27-before.png)

When you run the chrome audit, one of the recommendations to improve performance is to [use `webp`](https://developers.google.com/web/tools/lighthouse/audits/webp). 
I was ignoring that advice for a while for a lack of understanding, due to google's poor documentation of how to set it up.
However one day I just decided to give it a go, and here is how you can go ahead and do it yourself for those sweet performance improvements.

Install on Unix
----------------

1. First grab the files you'll need for install from [here](https://storage.googleapis.com/downloads.webmproject.org/releases/webp/index.html). Get the newest `tar.gz`
2. Follow the instructions [here](https://developers.google.com/speed/webp/docs/compiling#unix) to install on unix.

```
tar xvzf libwebp-0.6.0.tar.gz
```

```
cd libwebp-0.6.0
./configure
make
sudo make install
```


Use Webp
--------------
```
cwebp -lossless before.png -o after.webp
```

Now when you use them, you need to keep in mind that not all browsers support `webp`.
Because of that you need to build in some fallback

```html
<picture>
  <source srcset="img/awesomeWebPImage.webp" type="image/webp">
  <source srcset="img/creakyOldJPEG.jpg" type="image/jpeg"> 
  <img src="img/creakyOldJPEG.jpg" alt="Alt Text!">
</picture>
```

With this implemented instead of your old simple `<img>` tag, it'll load the smallest available file. You can check in chrome if it's working by looking at the `Network` tab, or by running another audit and seeing the new score for `Serve images as WebP`

If you want to read more, there's a great article [here](https://css-tricks.com/using-webp-images/)