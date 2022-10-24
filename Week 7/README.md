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
