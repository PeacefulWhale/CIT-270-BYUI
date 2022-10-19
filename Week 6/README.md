# Week Six

## Monday

Okay, back to working on getting this server up and running.

I'm sticking with `35.208.138.69` until I can figure out what's up with my HTTP and HTTPS stuff...

Doing `nmap 35.208.138.69 -Pn` does show that I have the `3333/tcp` and `4444/tcp` up, but their states are closed... I haven't started the server have I? My brain is smooth...

Now that my server is running, `nmap` shows both of those ports open... So the question is now why the heck can I not actually visit the webpage?

Oh yeah... I hard coded the `IP` address lol...

Jeez, I forgot that I did that, let me fix this with a terrible temporary fix.

Okay, so I'm getting the debug messages now (it's redirecting to `https://35.208.138.69:4444/`), but trying to connect to this webpage returns `sslv3 alter handshake failure`.

If I had to guess, I haven't set up my keys properly... Especially because today I've been informed that I need a `chain.pem` as well...

I've added the `chain.pem`, and now I'm getting new errors!

Specifically, I'm getting `no alternative certificate subject name matches target host name`. This is probably because the cert is for `*.cit270.com`. What happens if I try to use `peacefulwhale.cit720.com` instead?

That doesn't work... Have I set up `peacefulwhale.cit720.com` properly? I thought I did last time, but now I'm not sure...

It is set up there, this is probably coming down to my weird choice of port... Will changing my http port to `80` help? Nope, I need root privilege to use any port below ~1000. I think I can fix this with `sudo setcap CAP_NET_BIND_SERVICE=+eip $(which node)`

Also the rest of the class has finally swapped to running `nvm`.

Now it's listening on port 80, but I have the same problem of `Could not resolve host: peacefulwhale.cit720.com`... I'll figure this out sometime, but for now I'm just going to bury my head in the sand and pretend it's not a problem.

I'll probably just wait for the rest of my class to get to the step where we start to actually run the server, and I should be able to just follow along then.

## Wednesday

I'll change my http port to `80` and my https port to `443` to see if it actually works if I do that. If it does I'm guessing I wasn't opening my ports up properly, or that I was not routing the traffic right.

So I've got that up and working now... I changed nothing but swapped to using the default ports. I even had to add those ports to the allowed ports on my Cloud Console. So I'm not really sure what was going on, but at least it's not a problem anymore.

I really should fix my whole redirection thing from HTTP to HTTPS so I don't have to rely off the hardcoded url...
