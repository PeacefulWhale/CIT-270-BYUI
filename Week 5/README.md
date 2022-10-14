# Week Five

## Monday

Today I'm going to add `HTTPS` capabilities to my website.

I created my certificates with `sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./signed.key -out signed.crt` because I saw that command on Stack Overflow and it seemed to work...

The HTTPS server is up and running at `https://192.168.64.9:4444`

Right now it's just self signed, so it my web browser is *not* happy... And I need to use `--insecure`.

I also have gotten redirection up and running so going to `http://192.168.64.9:3333` will redirect automatically to the `https` server.

`curl` requests also get redirected, but that's not due to anything I've done, that's just how `curl` works.

There are a few free "trusted" certificates, and getting a trusted certificate isn't terribly expensive I don't think...

But for now, there is absolutely 0 reason for me to actually bother with a trusted certificate as this is, yet again, locally hosted.

## Wednesday

We are now using Google's cloud service to create a virtual machine. I assume that we'll eventually swap to a docker container service or something similar.

I'm already using a VM, and I set up a docker container that used to work (now that I hard code the http -> https redirection, the docker container only supports HTTPS, and will not properly redirect traffic from HTTP... I'll have to fix that sometime).

I created a very bare bones ubuntu image. And I've added the `ssh` keys that I created earlier to the allowed keys.

I can connect with the following command: `ssh 34.121.96.58 -i <path to private key`. Time to get this up and running too I guess...

1. `sudo add-apt-repository ppa:redislabs/redis`: Add redis repo.
2. `sudo apt update`: Update stuff
3. `sudo apt install redis-server`: Install redis.
4. `curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash`: Install nvm
5. `export NVM_DIR="$HOME/.nvm"`: Export nvm into path
6. `nvm install node`: Install the latest version of node.
7. `git clone https://github.com/PeacefulWhale/CIT-270-BYUI; cd CIT-270-BYUI/Server`: Clone repo and cd into it.
8. `npm install`: Install all the packages

Now I can run this, and oh boy look there are errors! Exciting!

The current problem is it requires the `SSL/` folder, which I haven't included because why would I upload private keys?

Anyway, I can create new ones pretty easily, it's not like these work ever secure in the first place.

I'll just use the following command: `mkdir SSL; cd SSL; sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./server.key -out ./server.crt`

After using `chmod 777 -R` on this directory, my `npm run dev` is now working.

And I can connect to the server with `https://34.121.96.58:4444`... Or at least I *should* be able to. It's probably not actually listening on those ports, or at least it's not listening to anything trying to connect remotely.

Whelp, that's probably not the most difficult thing to fix. I'll probably get around to doing that later.

I'll also have to make sure that I'm not letting any silly things happen if I open it up to the internet... I don't want anyone running scripts on a VM that I'm paying for.

## Friday

Today we're working with `certbot` to get a valid HTTPS certificate.

First, let's ssh into my cute little friend with `ssh 34.136.194.231 -i <private key>` (note, the IP address changes).

I should have probably just cloned the `Server` folder instead of the entire directory... but oh well...

Trying to connect to my VM online with `http://34.136.194.231:3333` doesn't work... I'm guessing I need to set up port forwarding or something on the virutal machine.

I think that following [this](https://stackoverflow.com/questions/21065922/how-to-open-a-specific-port-such-as-9090-in-google-compute-engine) advice might help? Let's see if it works I guess...

Instead of making my own rules, I just edited the default `http` and `https` rules.

And that didn't work... Okay, let's get certbot up and running first I guess. I'll just follow [this](https://itnext.io/node-express-letsencrypt-generate-a-free-ssl-certificate-and-run-an-https-server-in-5-minutes-a730fbe528ca) online tutorial.

While I wait for my turn to use do the challenge, I shall continue trying to get my VM to allow external connections...

I can see that it's listening to the right ports... I see that it's also accepting connections from inside as `wget` works fine...

But I, for the life of me, can't actually connect to it remotely.

I'll make a static address first, just so I don't have to deal with the changing IP address.

I now have a static address of `35.208.138.69`. I'll add that to the `*.cit270.com` DNS records under `peacefulwhale.cit720.com`.

Attempting to connect to `http://35.208.138.69:3333` still doesn't work.

Also certbot apparently only allows for 5 certs per domain... I guess we're sharing the certificates now XD

Which means I don't even need to use certbot, as I'm just copying and pasting the keys into it.

I still haven't actually been able to connect to my VM through it's public IP address, but at least now I have a valid certificate and static IP.

I'm pretty sure that I've set up the firewall properly, but tbh I have no clue. I'll figure it out later I guess.
