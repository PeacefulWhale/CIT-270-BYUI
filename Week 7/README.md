# Week Seven

## Monday

Okay, we're still working on the redis server on a separate VM, so I'll get that booted up.

I've got my redis server now running up on a static remote (`34.171.149.188`) and internal (`10.128.0.4`) IP address.

I'm still not 100% sure why we're running the redis server on an entirely separate VM. My guess is it's to teach us how to connect VMs together.

I set up this VM much in the same way that I set up the earlier VM (running on `35.208.138.69`).

Now I can run the redis server... If I change some settings... One such way is to change the `.conf` file, and to run `CONFIG SET protected-mode no` and then `CONFIG SET`... But to be honest this doesn't seem incredibly secure. This opens it up to everything right? AKA anyone can read anything from this?

So would keeping the current set up with just one single VM that has redis running on itself be more secure? I'm pretty sure that there's a way to make it so this redis server is only visible from IPs within a local network. That should be slightly more secure right?

For now, I'll just keep my redis-server running on my local VM until I figure this all out.

Also, I should edit my `main.js` so it reads the variables it needs from a `preferences.json` or something...

I'll do that right now actually to make things easier for me in the future.

We can now use the fancy [https://peacefulwhale.cit270.com/] url for the curl script instead of using the direct IP address, isn't that neat?

And we don't need to add the `--insecure` option now, yay for security!

And now anyone on the internet can access this completely unfinished website! Yay! If I actually have the server up and running... And the server is only running when I'm working on it, so 99% of the time it's just dead.

Next class we'll be looking at using docker / kubernetes, so not using the redis server on a separate VM probably won't matter then. If we're actually using a kubernetes / docker service and not just running kubernetes on this VM.

Till next time I guess.

## Wednesday

Today we are setting up a docker container. We're also going to be using Google's "cloud shell", which seems neat.

The readme has some important information:

```txt
Your 5GB home directory will persist across sessions, but the VM is ephemeral and will be reset approximately 20 minutes after your session ends. No system-wide change will persist beyond that.
```

We generated an SSH key so we could add it to our github profile, however I really don't want to add keys that I might loose track of, so I'll just keep updating my git repo from my main computer.

If I had to guess, this is why we created a separate redis server? So we can connect to that without having to install redis in our docker container?

After copying over the `preference.json` and `SSL/*` files, the container is up and running.

However, the docker container is very sad that it cannot connect to the redis server. I can be lazy and add the redis server stuff to the `Dockerfile` (like I did earlier) but I'll hold off on that for now to see if there's a way that we're supposed to fix this in our class.

Also it's snowing outside, but the ground, cars, and buildings are all too warm for it to stick, so everything is just wet.

It's very pretty however.

Also there's a `Cloud Code` extension that looks interesting.

The review rate of extensions are always kinda funny to me. The extension has half a million installs and less than 30 reviews.

Also google has a few extensions they've published... Including a `wireit` script runner? What is `wireit`? Apparently it's [this](https://github.com/google/wireit). Neat. I don't use a lot of NPM stuff, but if I ever do maybe I'll give this a look.

Okay, now we're getting this connected to our redis-server.

I don't think that my redis-server is accepting requests from outside connections (at least it shouldn't). So I'm not 100% sure what I should be doing here.

I should *probably* get that redis server running, but I'm still not sure why we haven't set up any sort of authentication for connecting to the redis server. Setting up a redis access list isn't terribly difficult to my knowledge...

For now I'll go the lazy route of installing and running redis.

To be honest, a better way of doing this would probably be to build two docker containers, one for the server and one for the redis server. Or maybe even just use the redis server VM. But for now I'll hope that running redis inside the docker container is okay.

I'll eventually through and purge the many containers I created in the process of getting everything to work XD

For now they shall clutter...

Anyway the docker container is up and running and I can connect to it. Everything appears to be working.
