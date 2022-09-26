# Week Three

## Monday

Today we're working on signing in with `curl` to our local host webpage.

I already did this, and my `sign_in.sh` script is [here](../Week%202/Friday/sign_in.sh).

We can get the uuidv4 function with `const { v4: uuidv4 } = require('uuid');`

Right now we're not actually saving these tokens anywhere, or associating them with anything. So we're just printing random tokens for now.

We also don't support `HTTPS` right now.
