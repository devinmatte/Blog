---
layout: post
title:  Bash ain't all That
subtitle: Switching from Bash to Zsh
description: Why I decided to switch from bash to zsh and why you should too
date:   2017-06-14 15:15:00
categories: post
featured-image: /images/posts/2017-06-14-options.png
thumbnail-image: /images/posts/2017-06-14-options.png
comments: true
author: Devin Matte
author-image: /images/devinmatte.jpg
author-bio: Second Year Software Engineering Student at Rochester Institute of Technology
---

When I first started getting into using Linux, the first tool I used was Bash on Ubuntu on Windows. Like many students starting out, that and git bash were my primary introductions to command line utilities. However as I transitioned to Linux I learned that there are more shells than bash. And being curious, I decided to check one different one out. Zsh.

The main difference between zsh and bash is the auto-complete when typing in a path or command. In bash it will only complete if there is an exact result (meaning case sensitivity applies) or up to all results matching. If you simply keep hitting tab it will list out the options, and then you simply keep on typing. However in zsh, there is a little more intelligence. When I go to hit tab to complete an option in zsh, and there are multiple results, it will list out the options, and allow me to select one.

![Options](/images/posts/2017-06-14-options.png)

The main difference I've noticed between zsh and bash is speed. When working on a machine with zsh as my shell, I feel much more productive than when I need to default to bash.

Along with directory selection with zsh, I've also fallen in love with searching history. Let's say you typed out a long command a few days ago, and all you remember is that it started with `git`. Well instead of hitting the up arrow 1000 times until you find it, type out `git` and then start hitting up. Now it'll only return results that also start with `git` throughout your history.

However one of the biggest appeals of zsh, is it's extensive customizablity. For me I use [oh-my-zsh](http://ohmyz.sh/) with the [agnoster](https://github.com/agnoster/agnoster-zsh-theme) theme.

![Example of theme](/images/posts/2017-06-14-theme.png)

There's a lot of cool shells you can find if you look around. Bash is lightweight, not necessarily the best.