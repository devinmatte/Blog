---
layout: post
title:  Signing Git Commits
subtitle: Signing your commits in Git
description: I recently discovered an interesting thing you can do with git commits. Signing individual commits.
date:   2017-04-19 14:15:00
categories: git
featured-image: https://devinmatte.github.io/images/posts/2017-04-19-signing-git-commits.jpg
thumbnail-image: https://devinmatte.github.io/images/posts/2017-04-19-signing-git-commits2.jpg
comments: true
author: Devin Matte
author-image: https://avatars3.githubusercontent.com/u/9310513
author-bio: First Year Software Engineering Student at Rochester Institute of Technology
---

I recently discovered an interesting thing you can do with git commits. Signing individual commits. Now I know that this may not be new to a lot of people, but from my experience looking around GitHub, it doesn't appear as though many people do it. In fact I've only seen one person other than myself with verified commits! So I wanted to share with you all today, how you can sign your own commits.

![How it looks on GitHub](https://devinmatte.github.io/images/posts/2017-04-19-signing-git-commits2.jpg)

How to make a GPG Key
---------------------

1. First make sure you have [GNU Privacy Guard](https://www.gnupg.org/download/) on your machine
2. Open a terminal and type out `gpg --gen-key`
3. At the prompt, specify the kind of key you want (default `RSA and RSA`)
4. Enter the desired size and expiration time (you can set it to never expire)
5. Enter an ID and Secure Password
6. Use `gpg --list-secret-keys --keyid-format LONG` to get a list of your keys
```
/Users/devinmatte/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2017-04-17 [expires: 2017-04-18]
uid                          devinmatte
ssb   4096R/42B317FD4BA89E7A 2017-04-17
```

Signing Commits
---------------
Now that you have a GPG key. It's time to use it with git. You'll need to tell git about your key.

1. Open a terminal and type out
```
$ gpg --list-secret-keys --keyid-format LONG
/Users/devinmatte/.gnupg/secring.gpg
------------------------------------
sec   4096R/3AA5C34371567BD2 2017-04-17 [expires: 2017-04-18]
uid                          devinmatte
ssb   4096R/42B317FD4BA89E7A 2017-04-17
```
2. Set git to use that key `git config --global user.signingkey 3AA5C34371567BD2`

Now you're set up to start signing commits. The way you'd do that is with `git commit -S`. However you really should want to sign *all* your commits. So it's quite obvious that your work is yours.

3. Set the default status on git:
    - `git config --global commit.gpgsign true` sets **All Commits** inside **All Repositories** on your machine to default as signed.
    - `git config commit.gpgsign true` sets **All Commits** inside a single repository on your machine to default as signed.

Now when you first set this up you may experience the annoyance of typing in your password every time you make a commit. This can be annoying. You'll also notice that it breaks commit functionality in other programs such as Jetbrains IDEs. So I looked around and found a simple solution
4. Edit `~/.gnupg/gpg.conf` and add these two lines to the bottom:

```
no-tty
use-agent
```

Now your password will be saved, and third party software will be able to commit like normal. Except now, all your commits are signed!

Verifying Commits Online
------------------------
Now one of the points of this, is to show inside your repositories that you've signed your commits, and that there is 100% certainty that you verify these commits are from you, and can be trusted. So in order to display this, first you'll need to export your GPG key to verify your commits online:

1. Export your full chain `gpg --armor --export 3AA5C34371567BD2`
2. Copy your GPG key, beginning with `-----BEGIN PGP PUBLIC KEY BLOCK-----` and ending with `-----END PGP PUBLIC KEY BLOCK-----`
3. Copy that to [GitHub](https://help.github.com/articles/adding-a-new-gpg-key-to-your-github-account/) using the instructions from their site.

So once you have your GPG key added to GitHub, all signed commits will display as verified. Currently it appears that GitHub is the only site that supporting GPG keys. (GitLab is currently working on it. Check [issues](https://gitlab.com/gitlab-org/gitlab-ce/issues/4232)).
![How it looks on GitHub](https://devinmatte.github.io/images/posts/2017-04-19-signing-git-commits.jpg)
