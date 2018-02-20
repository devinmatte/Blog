---
layout: post
title:  Intro to GitHub
subtitle: Introducing new Students to GitHub
description: GitHub is an incredible tool, not only for development, but for learning
date:   2017-10-26 15:55:00
categories: tutorial
featured-image: /images/posts/intro-to-github/profile.png
thumbnail-image: /images/posts/intro-to-github/profile.png
comments: true
author: Devin Matte
author-image: /images/devinmatte.jpg
author-bio: Second Year Software Engineering Student at Rochester Institute of Technology
---

[GitHub](https://github.com) is a wonderful, incredible tool. One that I might be a little too obsessed with. [GitHub](https://github.com) is a great tool for any new developer to get familiar with. Not only does it make the life of a Software Engineer easier, it makes getting a job easier too. I'd love to share my obsession with anyone who might be new to the platform and show them what great tools [GitHub](https://github.com) provides.

[Follow along with the Presentation](http://presentations.devinmatte.com/intro-to-github)

*Note: This is not an intro to git. A lot of the basic git knowledge will be assumed*

# Signing Up
When signing up for [GitHub](https://github.com), your username is important. For most of your life, you've picked usernames that fit what you wanted them to be. However [GitHub](https://github.com) isn't account you're making just to share memes with friends. [GitHub](https://github.com) is likely to become a portfolio and hub of all your professional projects and content. Because of that, you should treat your account with a little bit of decorum.

> I don't care if you've used *wgahnagl* as your username on every account for 15 years. **Stop.**

When recruiters/potential employers go to look for you online, you want them to be able to find your [GitHub](https://github.com). You're also likely going to be listing it on your resume. The same way you don't want your email to be sadpanda69@yahoo.com on your resume, https://github.com/sadpanda69 is just as bad. Pick a username that is easy to remember, and easy to match to you. For example, mine is: [`devinmatte`](https://github.com/devinmatte). How easy is that?

![Sign Up View](/images/posts/intro-to-github/sign-up.png)

## GitHub Student
**If you're not a student at a College/University Skip this section.**

![](https://hackhands.com/data/blogs/ClosedSource/hackhands-github-student-developer-pack/assets/github.png)

GitHub provides a wonderful service for students, where they work with all kinda of development platforms to put together a package of useful tools to help new student developers learn how to break into the industry. Through providing everything from GitHub Developer (unlimited private repositories) to $50 of [DigitalOcean](https://www.digitalocean.com/) credit.

See what else the offer by getting the pack yourself at  [education.github.com/pack](https://education.github.com/pack)

# Your Profile
Your Profile is also really important in the grand scheme of [GitHub](https://github.com). Think of your profile as your portfolio. You want it to show off your best work, and look good. This means you should have a couple key things:

- A profile picture that is you
- A short description
- Pinned Repositories
- Your Location
- An email
- A website
    - If you have one
        - If you don't you should make one

![My Profile](/images/posts/intro-to-github/profile.png)

Those aspects make for a good profile. It's clean, it's complete, and it shows attention to detail when people look at it.

## Pinned Repositories
Think about pinned Repositories as your best work. The top 6 things you'd want to show off to a recruiter. If you were to list projects on your resume, if you'd list them there, pin them here.

![My Pinned Repositories](/images/posts/intro-to-github/pinned.png)

You can pin any project that you've worked on, not just projects that you own. Have you made a bunch of commits to someone else's project? You can list that one, why not? You've worked on it haven't you?

![Pinning Repositories](/images/posts/intro-to-github/pinned2.png)

# Adding Projects
[GitHub](https://github.com) is a great place to start when creating a new project. The first thing you do is make a repository, and you're off to the races. However often you have existing projects sitting around that are not yet on GitHub. Well, what are you waiting for?

Well, sometimes there are reasons that a project isn't on GitHub.

- You didn't write most of the code
- It's a class assignment/project
- You're not proud of it

Well some of those reasons are valid, but other's are not you should put as much as you can on [GitHub](https://github.com). Personal Projects, Tutorials you completed or are currently going through, and some Class Projects*.

\* Some class projects you should keep offline. If you have permission however to make the code public, by all means do it! It shows off your skills!

## Add Existing Projects
You can easily push an existing git project to GitHub. GitHub is nothing more, at a base level, than a location to host remotes. They just happen to then provide a large series of features of top of the existing git repository. Because of this, you can add any, and all, existing git repositories to GitHub, at no cost to you (until you're no longer a Student and need private repositories still).

Simply make an empty repository on GitHub then run in your current project locally:

```
# Add a Remote
git remote add origin https://github.com/<username>/<repository>

# Push to remote and set upstream
git push -u origin master
```

Now if you don't have a git repo set up yet, but you do have something to add to it, you can set up your git repository locally with these commands:

```
git init
git add <file>
git commit -m "initial commit"

git remote add origin https://github.com/<username>/<repository>
git push -u origin master
```

If you ever forget these commands, or steps, GitHub will walk you through it themselves

![Help you out](/images/posts/intro-to-github/help.png)

### "My Code isn't good enough"

Don't say that. What better way to show how you've improved than by being able to look back at where you came from? Don't be discouraged by bad code! You're likely just starting out, no one expects anything incredible. If I got rid of all the terrible code I have on [my GitHub](https://github.com/devinmatte), I'd have 1 project, which in a couple months, I'll look back on and want to remove it. Bad code is fine, it shows your improvement. It also shows that you're willing to spend time learning new Technology and languages even though you might not be skilled.

# Issues and Projects
GitHub has these wonderful features embedded into repositories called Issues and Projects. You are likely to be more familiar with issues, but both are great tools that you should take advantage of.

## Issues
Issues are [GitHub](https://github.com)'s version of dealing with bug tracking, feature requests, user questions, and everything in-between. Any GitHub user can create an issue on any repository that they have access to. You could right this very moment, go to any public repository, and submit any issue you'd want.
Issues are great for developers, because it allows for their users to submit bugs, in the same place that they track new feature requests, and track their plans.

![Issues](/images/posts/intro-to-github/issues.png)

Issues are all given a number per repository. From \#1 onward. Issues can become very detailed, which allows for a lot of information be held inside of one. An issue is comprised of a large series of parts.

- Number Reference (\#32)
- Title
- Markdown rich description
- [Labels](https://help.github.com/articles/about-labels/)
- Assigned Users
- [Milestones](https://help.github.com/articles/about-milestones/)
- [Projects](https://help.github.com/articles/about-project-boards/)
- Comments

These parts together make for some very useful items that can store a lot of details.

An example of a good issue would be:

[![Good Issue](/images/posts/intro-to-github/good-issue.png)](https://github.com/ComputerScienceHouse/CSHPublicSite/issues/163)

- Markdown is used
- Images are included
- Title is descriptive
- Labels are attached

## Projects
Projects are one of the newest features to [GitHub](https://github.com) repositories, and often considered to the least used. However often there are cases where Projects make a lot of sense to use. What projects are is an agile board, inside of your repository, that uses issues as your cards. Now this can be useful in the sense that all issues submitted, can be dragged directly onto an agile board, and dropped right into the work-flow for the project.

![Project Board Example](/images/posts/intro-to-github/projects.png)

Projects is GitHub's solution to [Jira](https://www.atlassian.com/software/jira) and [Trello](https://trello.com/) in the marketplace. Agile boards aren't that complex, so they simply made one in GitHub, that uses issues and pull requests as the cards.

![Bootstrap Project Board Example](/images/posts/intro-to-github/exampleProject.png)

### Automation
Recently GitHub added automation to GitHub projects. This allows for agile board to automatically be updated based on actions on given Pull Requests or Issues. This makes them significantly more useful. There are actions for To do, In progress, and Done.

![GitHub Project Automation](/images/posts/intro-to-github/automation.png)

# Releases
Releases are a great way to help save states and versions of a project. You can tag a point in time and pull, clone, go back to and even attach binaries to a version.

![A single Release](/images/posts/intro-to-github/release.png)

Version tagging is important. GitHub recommends that you use semantic versioning `v1.0.0-beta`. This allows for you to keep track of a project like a proper piece of software.

![Tagged Versions](/images/posts/intro-to-github/tags.png)

# Forks and Pull Requests
GitHub is great mostly because of Forks and Pull Requests and the advantages that come with them. Because of Forks and Pull Requests the open source community has thrived on GitHub, and has even developed some modern agile practices across the field.

## Forks
Forks are best described as a copy of a repository, that can be treated like expanded branches. Okay, well that description might confuse people more. GitHub describes it as:

> A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.
Most commonly, forks are used to either propose changes to someone else's project or to use someone else's project as a starting point for your own idea.

![Fork Graph](/images/posts/intro-to-github/graph.png)

At a base level, a fork is a copy of a repository, with a reference to the master copy so that you may compare changes against it. Forks are a huge deal for GitHub. For a series of reason, first being that all forks, display and point to the original giving proper credit to where credit is due. The second being, that you can use Forks to compare changes to the master repository in a Pull Request.

![Example Fork](/images/posts/intro-to-github/exampleFork.png)

## Pull Requests
Oh Boy! The big boys! Pull Requests are the biggest, coolest, most useful, thing about GitHub (in my opinion). Pull requests are a lot of things, but we should take it one step at a time.

![Pull Requests](/images/posts/intro-to-github/pullrequests.png)

A pull request is used to compare changes between branches and forks of a repository. If a pull request is made from one branch/fork to another, it looks to see how many new changes have been made, and then displays those changes with a diff, and list of new commits.

![Pull Request Diff](/images/posts/intro-to-github/exampleDiff.png)

Pull requests are made to merge to branches through some form of approval process. When a pull request is made, in order for anything to happen, someone with write access to the repository needs to merge it. Sometimes repositories but restrictions even further. Like requiring someone to approve the changes, or by requiring the pull request to pass a series of tests.

![Pull Request Checks](/images/posts/intro-to-github/approved.png)

If you're more interested on the Fork/Pull Request work-flow, there's a decent [gist](https://gist.github.com/Chaser324/ce0505fbed06b947d962) available on the topic
