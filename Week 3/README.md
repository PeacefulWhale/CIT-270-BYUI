# Week Three

## Monday

Today we're working on signing in with `curl` to our local host webpage.

I already did this, and my `sign_in.sh` script is [here](../Week%202/Friday/sign_in.sh).

We can get the uuidv4 function with `const { v4: uuidv4 } = require('uuid');`

Right now we're not actually saving these tokens anywhere, or associating them with anything. So we're just printing random tokens for now.

We also don't support `HTTPS` right now.

## Tuesday

We've installed `redis`, so I've decided to spool up a multipass virtual machine so I don't have to worry about loosing track of all this stuff...

Currently the VM address + port is `http://192.168.64.9:3333`. I found it with `ip -4 addr`.

We're using `MD5` for the server, but given how easy it is to find collisions I might as well upgrade to something like `SHA512` or `SHA1024`. So I'll be using `crypto` to generate more secure (and possibly salted) hashes. I installed it with: `npm install crypto`.
