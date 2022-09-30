# Week Three

## Monday

Today we're working on signing in with `curl` to our local host webpage.

I already did this, and my `sign_in.sh` script is [here](../Week%202/Friday/sign_in.sh).

We can get the uuidv4 function with `const { v4: uuidv4 } = require('uuid');`

Right now we're not actually saving these tokens anywhere, or associating them with anything. So we're just printing random tokens for now.

We also don't support `HTTPS` right now.

## Wednesday

We've installed `redis`, so I've decided to spool up a multipass virtual machine so I don't have to worry about loosing track of all this stuff...

Currently the VM address + port is `http://192.168.64.9:3333`. I found it with `ip -4 addr`.

We're using `MD5` for the server, but given how easy it is to find collisions I might as well upgrade to something like `SHA512` or `SHA1024`. So I'll be using `crypto` to generate more secure (and possibly salted) hashes. I installed it with: `npm install crypto`.

## Friday

So I've learned that we're actually going to be using docker containers. I asked if I could set that up, but was told not to worry about it...

So I guess as people go through their errors I'll get started on setting up a docker container for this server thingy.

Thankfully, having set up a VM, I have a decent idea of what I'll need for my docker container.

It's good to have both though, as I can do testing and stuff on the VM a little bit easier than I can on the docker container.

Build Container: `docker build --pull --rm -f "CIT-270-BYUI/Server/Dockerfile" -t cit270:latest "CIT-270-BYUI/Server"`

Run Container: `docker run -it --rm -p 1111:3333 cit270` (I'm using 1111 for the docker container and 3333 for my VM, but it shouldn't matter because the VM isn't `localhost`). I personally use the docker desktop to run it, as I just find it's a little bit easier to work with than the command line in this situation.

I haven't finished the docker file yet... I need to figure out how to get redis running on it...

## Friday After-Class Update

Okay, now I've gotten docker up and running. I can access the server at `http://localhost:1111`.

Thankfully it didn't take me as long as I feared it would. I just had to update the docker file and add a startup script. Bonus: I can now use this startup script on my virtual machine too.

I'll probably come back some time and update the startup script so it is actually useful... But it works for now.
