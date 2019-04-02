---
layout: post
title:  (WIP) Creating an Openshift Cluster
subtitle: Openshift Origin is very powerful and free
description: I created an Openshift Origin Cluster and have it running for nearly 100 projects
date:   2019-04-05
categories: tutorial
featured-image: https://www.eweek.com/imagesvr_ez/b2bezp/2018/10/Red-Hat-OpenShift-Containerplatform-1088x725.png
thumbnail-image: https://www.eweek.com/imagesvr_ez/b2bezp/2018/10/Red-Hat-OpenShift-Containerplatform-1088x725.png
comments: true
author: Devin Matte
author-image: /images/devinmatte.jpg
author-bio: Software Engineering Student at Rochester Institute of Technology
---

OpenShift Origin, also known since August 2018 as OKD (Origin Community Distribution) is the upstream community project for Openshift services offered by Red Hat. In general people will pay Red Hat for either the enterprise or online versions of the application. However if you don't want to pay, and have your own hardware available to install it on, you can make your own cluster. This is very useful if you have mutliple users who want to spin up projects, especially under OpenID Connect. At Computer Science House we had this exact need and the resources to build it, so I helped us stack up our new cluster.

# Openshift Background
What is Openshift and why would you want it? Openshift Origin is a project that builds heavily on Kubernetes and provides a large series of management tools for any projects you may have on the cluster. This even includes a very attractive UI that makes spinning up a project from scratch a matter of minutes until deployment. Under the hood it also helps administrators by providing CLI and interfaces to make typically long tasks a few clicks/commands away.

We at Computer Science House have over 100 active members, all typically wanting to spin up projects for the web frequently. This meant any time someone wanted to work on a project, we had to allocate them a Virtual Machine (VM) and the resources that came with that. This was innefficent both in time for our administrators and in resources as we would typically allocate more than was needed to run the project. The solution we arrived at was to stand up an Openshift Cluster and allow members to simply just create projects at will and monitor the usage. This worked really well. Too well. The cluster was incredibly popular and over time it started to run out of resources and due to how long we had it, it had degraded slightly from updates throughout the two years it stood.

This meant when we went to look at upgrading again, I decided it was time to spin up a new one from scratch. This time on the newest version, with more resources to ensure we don't run out again, with more storage, and with the knoweldge learned from the old cluster.

# How to begin
Before you can really begin you need to define how large your cluster is going to be. You need at least 3-4 machines (VMs or Physical) for a full cluster.

- A Load balancer (lb)
- A Master (master)
- An ETCD node (etcd)
- A Compute and/or Infrastructure Node (node)

In the case of our cluster, I built up

- 1 Load balancer
- 5 Masters
- 5 ETCD Nodes
- 15 Nodes
  - 2 Infrastructure
  - 13 Compute Nodes

These nodes can be either RHEL or CentOS and all have some minimum specs that must be met. Those are defined in the [Openshift documentation](https://docs.openshift.com/container-platform/3.11/install/prerequisites.html). From there, there's a lot of system prerequisites that need to be met. It's near impossible for me to define them all, so luckily [Openshift provides them](https://docs.openshift.com/container-platform/3.11/install/host_preparation.html).

In general, when in doubt, refer to the guide and **read carefully**. Once you have your nodes set up with the required specs, it's time to define your Openshift Cluster and start installing.

# Defining the Cluster

