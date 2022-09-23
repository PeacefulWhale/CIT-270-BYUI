# Week Two

One can utilize curl to communicate with stuff across the internet. To my knowledge, it's mainly designed with allowing for human readable HTTP/HTTPS requests and communications.

## Monday

We're using [this](https://dev.stedi.me) website to watch how APIs / HTML / request stuff works.

I wrote a python script to generate both `.json` files, and to log in.

I also wrote 2 bash files.

## Wednesday

We're going to learn how to use `node.js`.

I already had it, but it was installed through npm. I've removed it (and npm) and have installed it through brew instead so I can keep track of it a little bit easier.

For this project I installed `express` and `nodemon`. Because of BYU-I's certificate stuff I had to run `npm config set strict-ssl false` because I am too lazy to actually set up the certificates properly.

I created a task in `package.json` called `dev` that just translates to `nodemon main.js`. Now when I run `npm run dev` it will automatically refresh the backend when I update the files.

So far this isn't really a project, but I think that this is a "baby's first steps" with `node.js`. I've used `django` before so this was similar.

## Friday

Today we are looking at signing in with created credentials with curl I guess.

Maybe I *shouldn't* be including the log in information for this in the repo, but considering that I am generating them as I go, I don't think it's that big of a deal, especially as this is being sent to our current server.

Wait, I forgot, this is on my git. Those files keep changing every time I run the python script, so I'm going to add them to the git ignore XD.

I also had to install `body-parser` and `uuid` (and had to turn off strict-ssl again... I wonder if my school will fix their certificates).
