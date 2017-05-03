---
layout: post
title:  Making Git-Challenge
subtitle: I wanted to make Git Commits Competitive
description: I wanted to make Git Commits Competitive, so here's Git-Challenge.
date:   2017-04-15 20:10:00
categories: coding projects git
featured-image: https://devinmatte.github.io/images/posts/2017-04-15-making-Git-Challenge.jpg
thumbnail-image: https://devinmatte.github.io/images/posts/2017-04-15-making-Git-Challenge2.jpg
comments: true
author: Devin Matte
author-image: https://avatars3.githubusercontent.com/u/9310513
author-bio: First Year Software Engineering Student at Rochester Institute of Technology
---

Git Challenge was a project I had an idea for when I looked over a GitHub Organization I was a part of. It is for my old High School Technology Team, the organization that taught me most of what I knew about programming before I arrived at RIT. The projects in the GitHub hadn't been touched by anyone except myself and a few other Team Alumni. So I thought I should come up with a way to encourage contributing to these projects, and to teach people git. So I came up with Git-Challenge.

Git Challenge is an app made to gamify contributing to projects, for any Organization. Not just for the [Tech Team](http://nhstech.us/), It could also be used for [Computer Science House](https://csh.rit.edu/), or really any other git organization with multiple contributors. I wanted to build this whole project with the intention of anyone being able to deploy it for any organization. I learned about Environment variables, continuous integration, containers, SQL databases, and APIs. Basically I learned way more about building a web application than I ever thought I would from this project. I am incredibly proud of this project.

Deploy your Own Instance of Git-Challenge
-----------------------------------------

So I wanted to make Git-Challenge as easy to deploy as I knew how. So there are two ways in which you can deploy Git-Challenge:
1. Copy `configuration-template.php` to `configuration.php` and fill in the default fields with the relevant data.
2. Launch the instance with Environment variables, you can still copy `configuration-template.php` if you want, but it's not required

Now in order to complete deployment you're going to need a series of data

| Variable |Environment Variable | Value |
|----------|---------------------|------------------------|
| host     | CHALLENGE_DB_HOST   | Database Host URL
| username | CHALLENGE_DB_USER   | Database User
| password | CHALLENGE_DB_PASS   | Database User Password
| database | CHALLENGE_DB        | Database
| git -> org      | CHALLENGE_GITHUB_ORG| Github Organization being tracked
| git -> client | CHALLENGE_GITHUB_CLIENT | OAuth Application Client ID
| git -> secret | CHALLENGE_GITHUB_SECRET | OAuth Application Client Secret
| options -> pool | CHALLENGE_POOL | Chooses whether to pool for new users or only track the users already in the database
| options -> debug | CHALLENGE_DEBUG | Choose whether to show debugging notifications on the page after new data loads
| options -> event | CHALLENGE_EVENT | Choose whether to show the event panel
| options -> challenges | CHALLENGE_CHALLENGES | Choose whether to show the challenge panel/create challenge tables
| options -> info | CHALLENGE_INFO | Choose whether to show the information panel
| options -> maxcalls | CHALLENGE_MAXCALLS | Set a maximum number of API calls on each new Data load. GitHub's max is 5000 per hour, so setting a personal limit can help avoid hitting GitHub's limit.
