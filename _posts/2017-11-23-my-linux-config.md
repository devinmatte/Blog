---
layout: post
title:  My Linux Setup
subtitle: How my linux is set up on my personal machines
description: Learn about how I set up my Linux environment
date:   2017-11-23 15:12:44
categories: post
featured-image: /images/posts/my-linux-config/gnome-tasks.png
thumbnail-image: /images/posts/my-linux-config/gnome-thumb.png
comments: true
author: Devin Matte
author-image: /images/devinmatte.jpg
author-bio: Second Year Software Engineering Student at Rochester Institute of Technology
---

I've been using Linux exclusively as my daily driver for about a year now. With having used linux for that long you start to put together a setup that you enjoy and that makes your life easier. I often have had friends ask me for how I set up my distro, so I figured it would be best to just write it up.

## Distro

First it starts with my distro. I personally like to use [Ubuntu Gnome](https://ubuntugnome.org/), currently using the [17.10](https://www.ubuntu.com/desktop/1710) version. I like ubuntu because of how easy the transition to ubuntu from windows is compared to redhat distros or otherwise. I especially like it because of the heavy amount of support for debian distros across the board with `.deb` files. Sure `tarball`s work on every machine, but theres often more work involved than necessary.
Now recently [17.04](https://wiki.ubuntu.com/UbuntuGNOME/GetUbuntuGNOME) hit end-of-life and I had to make the upgrade to [17.10](https://www.ubuntu.com/desktop/1710). With that upgrade instead of installing 17.10 straight, I did a `do-release-upgrade` from Ubuntu Gnome [17.04](https://wiki.ubuntu.com/UbuntuGNOME/GetUbuntuGNOME) and dealt with the weird transitions that occurred. I had to do that because with the update to using gnome by default in [17.10](https://www.ubuntu.com/desktop/1710), [Ubuntu Gnome](https://ubuntugnome.org/) is no longer supported.

## Design

I like how customizable linux can be. I have seen so many different peoples layouts and how unique they can be, and how each person can set it up to efficient for them. I am no different. I really love my layout using the [Arc-Theme](https://github.com/horst3180/arc-theme), [Dash to Dock](https://extensions.gnome.org/extension/307/dash-to-dock/) and [Numix Circle Icons](https://github.com/numixproject/numix-icon-theme-circle). Looking at each individually I love how they look, but together they really make my OS feel complete and well organized.


### Nautilus and Windows

![File Manager Icons and Theme](/images/posts/my-linux-config/file-manager.png)

Files and the file manager look pretty fantastic with the Arc-Theme, but when paired with Numix Icons it looks even better. I use the Arc-Darker version of the Arc theme, but if full light or full dark themes are your cup of tea, those are very much available.

### Dash to Dock

One of my biggest complaints when I switched from Windows to Linux, was the lack of a taskbar. I hated having to press `super` in order to get to my open programs. And I don't often use `alt`+`tab` so I was in need of a taskbar. Dash to Dock was the perfect solution, especially given its customizability.

![Dash to Dock in Gnome](/images/posts/my-linux-config/gnome-tasks.png)

### Numix Icons
One of the best things I discovered was Numix Icons for Linux. This allowed for me to be able to skin every default app, and most if not all installed apps with a consistent themed icon pack. With these skinned icons using the OS feels like a very unified system, where it looks and feels like each and every app was designed specifically with this system in mind.

![Numix Icons in Gnome](/images/posts/my-linux-config/icons.png)

## Setup

Now I've had to reinstall my distro a few times over the last year with a series of hardware issues on my last laptop. So because of that I got really used to making scripts and aliases for setting up my machines. I have a self deleting script that I can easily run to setup a machine ready to be used.

```bash
#!/bin/bash

### Grab all debian packages for common programs ###
wget https://downloads.slack-edge.com/linux_releases/slack-desktop-2.8.0-amd64.deb
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
wget https://dl.discordapp.net/apps/linux/0.0.3/discord-0.0.3.deb
wget https://atom-installer.github.com/v1.23.1/atom-amd64.deb

### Install all deb packages ###
sudo dpkg -i *.deb

### Remove all deb packages ###
rm *.deb

### Add all needed repositories ###
sudo apt-add-repository ppa:numix/ppa
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys BBEBDCB318AD50EC6865090613B00F1FD2C19886 0DF731E45CE24F27EEEB1450EFDC8610341D9410
echo deb http://repository.spotify.com stable non-free | sudo tee /etc/apt/sources.list.d/spotify.list

### Updates and Upgrades ###
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get dist-upgrade -y
sudo apt-get autoremove -y
sudo apt-get clean -y
sudo apt-get autoclean -y
sudo apt-get install -f -y
sudo apt-get install --fix-broken -y

### Install Packages ###
sudo apt-get install -y google-chrome-stable vim pandoc git python3-pip php numix-icon-theme-circle texlive-full openssh-server spotify-client openjdk-8-* arc-theme npm nodejs nodejs-legacy zsh

### Installing Oh-My-Zsh ###
sh -c "$(wget https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

### Installing Zsh plugins ###
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

git clone https://github.com/devinmatte/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

### Switch to zsh as shell ###
chsh -s $(which zsh)

### Add Cronjobs ###
touch mycron   
echo "0 * * * * /home/devinmatte/.daily.sh" >> mycron
sudo crontab mycron
rm mycron

### Delete Script ###
rm -- "$0"
```

I also have gotten used to having cronjobs to help make my life easier. I have one cronjob set up on my personal machine, but on my servers I have a bunch others. I'll likely write a post on those later, but as outlined in the script above, I have a cronjob called `.daily.sh` that gets run every hour (likely could be run less frequently but ¯\\\_(ツ)\_/¯ ). That script looks like this:

```bash
#!/bin/bash

### Update Everything ###
sudo apt-get update -y
sudo apt-get upgrade -y
sudo apt-get dist-upgrade -y
sudo apt-get autoremove -y
sudo apt-get clean -y
sudo apt-get autoclean -y
sudo apt-get install -f -y

### Clean out old logs ###
sudo rm /var/log/*.log.*
sudo rm /var/log/syslog.*
sudo rm /var/log/wtmp.*
sudo rm /var/log/btmp.*
sudo rm /var/log/*/*.log.*
sudo rm /var/log/*/*.*.gz
```

I also have a series of aliases set up, many of which are a little old and rarely used, but figured some may help new users.

```bash
#########################################
#	Updates and Setup		#
#########################################

### Machine Setup/Maintence ###

# Update everything in one command
alias updateall='sudo apt-get update -y && sudo apt-get upgrade -y && sudo apt-get dist-upgrade -y && sudo apt-get autoremove -y && sudo apt-get clean -y && sudo apt-get autoclean -y && sudo apt-get install -f -y'

#Add all external repositories
alias addall='sudo apt-add-repository ppa:numix/ppa && sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys BBEBDCB318AD50EC6865090613B00F1FD2C19886 && echo deb http://repository.spotify.com stable non-free | sudo tee /etc/apt/sources.list.d/spotify.list'

# Install all Software
alias installall='updateall && sudo apt-get install -y google-chrome-stable vim pandoc git python3-pip php numix-icon-theme-circle texlive-full openssh-server spotify-client openjdk-8-* arc-theme npm nodejs nodejs-legacy zsh'

#########################################
#	Utilities			#
#########################################

# Update git repo and all submodules
alias git-update='git pull && git submodule init && git submodule update && git submodule foreach git pull origin master'

# Add all, commit and push
alias git-quick='git add -A && git commit && git push'

# restart network-manager
alias nwrst='sudo -S service network-manager restart'
```

## Use

Once I get into using my distro, I have a few tools and utilities to make my life easier. I've [talked in the past](https://devinmatte.me/post/2017/06/14/bash-to-zsh/) about how I use [Zsh](http://www.zsh.org/) and [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) to make my shell better overall. I use the agnoster theme with all of the convenient features that come with it. That includes git support, context highlighting and action icons.

![Example of Zsh](/images/posts/2017-06-14-theme.png)

I've recently added even more to this arsenal by discovering zsh plugins, one of which is syntax highlighting and the other is auto suggestions when you start to write out a command.