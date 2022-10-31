# Week Seven

There were a few people who were still working on getting their stuff set up.

Today we're going to work with getting our docker container set up with kubernetes (my prediction was correct).

I've only worked with kubernetes in a *very* limited aspect. It's also apparently expensive. My question is this: Can't we just run kubernetes on our tiny little servers? Will we make use of all of the features offered by Google's kubernetes service?

My teacher has informed me that kubernetes is very chonky, and the lightweight $5 a month VM instance won't be sufficient for a kubernetes deployment.

I've been turning my VMs off whenever I'm not actively running them (and have only spent $1.21) so hopefully I can run the kubernetes instance for a while.

We're also working in a group now.

I do not know their names, but surely that's not important.

Even setting up a bare bones minium kubernetes cluster it's about $85 a month.

Kubernetes works with a minium of two virtual machine: A master node and a worker node.

I think that this is what it looks like:

Master Node:

- API Server
- Scheduler
- Controller
- etcd

Worker Node:

- Kublet
- Docker
  - Pod
    - Container

Also updating my laptop killed my xcode command line tools? Why?

I can reinstall them by going to Apple's website: `https://developer.apple.com/download/all/`. I chose `Command Line Tools for Xcode 14` because that seems to be the current version? I'm not 100% sure. Either way, hopefully it works.

Everyone else is getting docker installed and running, but I've already got that so I'm just waiting for them.

They're also installing the google cloud shell command line stuff, but because I'm very lazy and really like the GUI (and I can shell into the google cloud if I want to).

If I need to install the google cloud cli in the future, I can do from: `https://cloud.google.com/sdk/docs/install` or use the brew command: `brew install --cask google-cloud-sdk`.

And that's all for today! I shall await further instructions.
