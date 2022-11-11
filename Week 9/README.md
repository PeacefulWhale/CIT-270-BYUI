# Week Nine

## Monday

I taught class today.

Here's what I've prepared:

- Creating Secrets out of the SSL keys, and adding them to both the kubernetes enviroment and removing them from the docker image.
- Setting up the docker image so it can be run in a kubernetes pod.
- Building and pushing the docker image to DockerHub.
- Changing the YAML file so it can pull and run the docker image.
- Creating the kubernetes pod again.

## Wednesday

I taught class again today.

Here's what I planned to do:

- Make sure that the pods are up and running.
- Create a load balancer for kubernetes.
- Modify our Pod to be a Deployment.
- Get the static IP of the load balancer.
- Add the IP to the DNS for our domain.
- Confirm that everything is working.

However 99% of the class had problems actually getting their Pod from last class running...

So this Friday they're going to work on just fixing their Pods... So at this point I'm 2-3 classes ahead.

## Friday

Yep, today we're doing what I was going to do Wednesday. The teacher has decided to ignore people's pods not working, and to go for creating the deployment. This is what I wanted to do at the time, but we didn't.

Anyway, now at least I've got my stuff up and running (for the low cost of $100 a month instead of a $5 virtual machine).

I've been running the redis-server on my own pod, so whenever the pod gets reset all the data on that redis server will be purged.

I should figure out a better way of getting the redis server up and running... If I had to guess running a VM on the same network might work. However, I bet kubernetes has a "best practice" way of doing something like this.
