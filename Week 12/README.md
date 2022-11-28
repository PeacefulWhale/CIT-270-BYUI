# Week Twelve

## Monday

So I didn't figure out what's up with my static assets over the break.

In this class we're setting up a redis server on our kubernetes thing. I tried to do this earlier, but I was too lazy to actually get it set up. I did set up a simple kubernetes redis image / container / whatever they're called, but I couldn't figure out how to make the data "persist" through resets / whatever without having to do all the fancy stuff that I didn't want to do.

This probably means that I can get rid of the redis stuff in my docker container. I am glad to finally be rid of it.

So here are the steps I did:

- Create the `redis.yaml` file.
- Create a new redis secret for the redis password stuff: `kubectl create secret generic redis-secrets-pw --from-literal=REDIS-PASS=<password>`.
- Apply the `.yaml` file: `kubectl apply -f redis.yaml`.

Okay I've started it and the public static hosted stuff suddenly works and I changed absolutely hecking nothing.

Neat. I won't complain. I'm guessing I didn't properly delete an existing pod or something, who knows. I don't!

Now that the redis thingy is up and running, I'm guessing we're going to change our original yaml thing so it connects to the new redis thing instead of whatever we've been using so far. Ironically I haven't been having the redis problems that everyone else has because I decided to do it in the worst possible way...

Also new-ish word: `Headless Service`. We're talking to it on the local network, who needs IP address?

Unfortunately I'm getting an error when I try to actually get this thing running... I'm getting a `CreateContainerConfigError`... And it's not telling me why exactly... Do I have to get logs from something else? What exactly is the error?

Anyway before I worry about that, let me grab the redis password from the secret. This secret is loaded as an enviroment variable... Is this more or less secure than having it be a file?

Okay, after changing stuff around, now both containers are returning `CreateContainerConfigError`...

I'll figure this out next class I guess. I definitely messed up something somewhere.
