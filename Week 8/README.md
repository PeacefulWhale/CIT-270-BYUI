# Week Eight

## Monday

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

## Wednesday

At the beginning of class we checked our repos to make sure that we had everything updated. As I've been constantly pushing both my changes to the server, and my notes (which I'm still not sure was a good idea), everything is up to date.

To be honest, I'm not sure why I started pushing my notes to Github... I think it's because I had some code that I wanted to push as well (the python and shell scripts), and I wrote READMEs for them. Eventually those READMEs just became my notes, even if there were no actual code stuff to push...

It would be kinda funny if these notes are eventually used by someone who isn't me... Hello future person, I'm sorry that these are terrible notes!

We're using the google cloud thingy, and I'm going to avoid doing that as long as I can because I don't expect to use that tol outside of this class ever, and I don't want to forget that I've installed it. If I feel like I would benefit from using this, I'll set it up.

If I were using the gcloud thing I would log in (using `gcloud auth login`), and then do `gcloud config set project <project-id>`. I feel like there's a better way of getting the project ID, but idk what it would be.

I have noticed that every GUI thing I've done through the cloud console has had the option to copy / paste a gcloud command, so that's convenient.

Wait a minute, I can just use the cloud shell editor for all this, and follow along without installing gcloud it all to my local machine. Yay!

The next command is: `gcloud components install kubectl`. However, because I'm running this in the cloud shell I run `sudo apt-get install kubectl`.

We're creating a `.yaml` file for our kubernetes to create a `busybox` docker image / container.

I've used `.yaml` before, but I was wondering what the acronym stood for. Wikipedia says it originally stood for "Yet Another Markup Language", but now people refer to it as "YAML Ain't Markup Language". Wack. I guess it makes sense as `.yaml` seems more like `.json` or `.xml` (for data) to me instead of other markdown languages.

Also the teacher just realized that `docker` comes with `kubectl`... I guess the rest of the class didn't need to install it (but because I'm following along in the gcloud editor I think I still had to, but if I didn't then Idk).

## Friday

Today we're connecting to the kubernetes instance through `gcloud` with the command `gcloud container clusters get-credentials cluster-1 --zone us-central1-c --project <project-id>`

I wonder if it's possible to rename the project name (and is it secure to have it in this public repo? I'm guessing you can't do much with it but IDK for sure). To be on the safe side, I've censored it.

Now I when I run `kubectl config view` I can see the kubectl configuration file. Also I'm even more glad that I'm running this on my cloud thingy because there are now a lot files and folders being downloaded and set up, that I would probably forget about.

We're pulling from the `busybox` docker image thingy. A quick google shows that this appears to be a collection of "stuff" for quickly setting up a small GNU / UNIX enviroment.

I can add this pod to the kubernetes thing with `kubectl apply -f busybox.yaml`, and confirm that it's running with `kubectl get pods`.

We can upload to DockerHub to push our docker image, and then access it with kubernetes...

However, we only get a single private repo with the public version of DockerHub, so I'm going to see if there's a way for me to do this without uploading it to DockerHub. Maybe it's possible to use a locally hosted image.

Maybe I can set up a private repository with a google cloud VM thing, or a local one that only runs temporarily.

Anyway, I'm teaching the class next, so I'll have to make sure that I've figured it out by then so I can continue to the next step.
