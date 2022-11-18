# Week Ten

## Monday

I think that most of the class has caught up to having their load balancer deployments up and running, but I'm not sure if they've got the DNS records set properly (but that's super easy so they'll probably get that done near instantly).

I think I should probably take a look at getting the redis server actually up and running, instead of just smacking it into the deployment (which get purged often lol. I'm sure that's exactly what you want for your user database).

Actually it appears that I was wrong, the class has not yet gotten this far...

I'll finish some homework while they catch up.

I really should work on the redis server but I'm lazy right now, and we might set it up as a class later as a kubernetes thing.

Okay, they've gotten to the DNS part now, and there's 30 minutes left in class, so we should be able to start something after this.

And nope, too many people with errors and nonresponsive servers... I guess we'll continue this Wednesday.

## Wednesday

Today we are getting it so our POST scripts from earlier can work now.

My scripts work and stuff, so that's good.

But the only reason why this is working is probably because I'm running the redis server inside of my pods (which I think is terrible practice ;_;).

I'll fix this eventually... Sometime... Probably ;_;

The rest of the class spent today getting their stuff up and running.

## Friday

We've been given a pre-made `public` folder to include in our server. I assume that we're going to add all the functions to send users to these webpages.

Also I've realized there's even more things that I should be doing:

- Fix HTTP redirection to HTTPS (why is it not working, I don't know!)
- Make the preference a secret like the SSL files, and add it to the git ignore.
- Make the redis server not hosted on the same pod, who does that?
  - I should try to figure out how to make the redis server run on kubernetes. I've looked into it, and it looks like I might have to create a new cluster... Which I am lazy and do not want to do...
- Add functionality, but it looks like we'll be doing that today.

Apparently `app.use(express.static(...))` is a thing. Neat. This does make things easier.
