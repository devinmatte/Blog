---
layout: post
title:  (WIP) Creating an Openshift Cluster
subtitle: Openshift Origin is very powerful and free
description: I created an Openshift Origin Cluster and have it running for nearly 100 projects
date:   2019-07-15
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
I used the Ansible setup for the cluster. Despite its issues, it was the most reliable method for us given past experience. If you want to try out the atomic host, go for it, howver a lot of this post will not apply.
The most important file to the ansible setup lives at `/etc/ansible/hosts`. This is your Inventory, and it's where you define how your cluster is set up. All the ansible scripts that build your cluster pull from this file, and it effectively is all environment variables. You can read in more detail in the [documentation](https://docs.openshift.com/container-platform/3.11/install/configuring_inventory_file.html).

## Nodes, etcd, and Masters
The first important step is defining your nodes, etcd, and masters. The inventory is preloaded with some children defined, which defines the type of nodes that can exist in the inventory.

```
[OSEv3:children]
masters
nodes
etcd
lb
nfs
```

You then need to define your node groups, that will match up to kubernetes node groups. Below is our configuration where we just define a master, infrastructure node and compute node
```
openshift_node_groups=[{'name': 'node-master', 'labels': ['node-role.kubernetes.io/master=true']}, {'name': 'node-infra', 'labels': ['node-role.kubernetes.io/infra=true']}, {'name': 'node-compute', 'labels': ['node-role.kubernetes.io/compute=true']}]
```

Finally we define the host groups which is what ansible will use to connect to the boxes to conduct the full setup. The `[01:05]` notation is super useful in defining sequential numbers of servers to loop through _(remember servers are cattle not pets)_.

```
# Host group for masters
[masters]
okd-master[01:05].csh.rit.edu

# Host group for etcd
[etcd]
okd-etcd[01:05].csh.rit.edu

# Specify load balancer host
[lb]
okd-lb01.csh.rit.edu

# Host group for NFS
[nfs]
okd-master01.csh.rit.edu

# Host group for nodes
[nodes]
okd-master[01:05].csh.rit.edu openshift_node_group_name='node-master'
okd-node[01:02].csh.rit.edu openshift_node_group_name='node-infra'
okd-node[03:15].csh.rit.edu openshift_node_group_name='node-compute'
```

## Additional Cluster Behavior
Now that you've defined all the systems that will be your kubernetes/okd cluster, you may want to define more details about it. Maybe you have a star certificate that you want to use, maybe you want to put it behind OopenID connect, or or you want to set up cluster metrics, well then all of these things also get defined in the inventory. I'm sure there are plenty more things you can define, but those are just a few of the things I wanted to define for our cluster.
There is fantastic documentation on both the [cluster metrics](https://docs.openshift.com/container-platform/3.11/install_config/cluster_metrics.html) and [aggregated logging](https://docs.openshift.com/container-platform/3.11/install_config/aggregate_logging.html) and setting them up for your cluster.

# Running Ansible

Once you've gotten your inventory file setup, you're ready to run ansible and be up and running, right? Well, sorta. This part is where the majority of the time comes in. Ansible scripts for setting up Openshift/OKD are... less than perfect. Sometimes they might merge broken changes into the branch and ignore your PR :upside_down_smiling_face:. However, once you finally get it to run, it certainly saves you countless hours on the setup.
For those planning to run the setup on RHEL7 boxes, make sure you have optional and addtional repos enabled before running ansible, also, it wouldn't hurt to run `yum update` before letting the scripts run.

Once you have prepped all the boxes as well as you think you can, clone the [ansible repo](https://github.com/openshift/openshift-ansible), `checkout release-3.11`, `ansible-playbook -i /etc/ansible/hosts ~/openshift-ansible/playbooks/prerequisites.yml`, `ansible-playbook -i /etc/ansible/hosts ~/openshift-ansible/playbooks/deploy_cluster.yml`, then wait... A long time.

There is likely going to be a step at which the script will fail and require manual intervention. There's only so much I could anticipate during the setup process, some errors were due to the scripts themselves, and others were due to version mismatches or missing repos on the RHEL7 boxes in question. The scripts don't tend to tell you in very good detail what failed or why, so you'll need to be good at investigating. I surely learned a lot about package mangers, dns, ssl, and general linux from this process. A few times there were even errors due to kubernetes itself that required a decent amount of research, and frequently dealing with the exact solution I needed being behind a Red Hat paywall.
