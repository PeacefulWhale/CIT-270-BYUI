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
