# Week Thirteen

## Friday

I've been sick this week... Which isn't great because this is the final week of the class.

Anyway here's what I need to do for the final:

- As a user I want to be able to login so that I can access the application - 40 points
- As a user I want to be able to create a new login so that I can login- 40 points
- As a very private person I want to be able to encrypt login data in transit (SSL) so that other people can't see it- 40 points
- As a very private person I want to hash my password so that other people can't see my data- 40 points
- As a user I don't want hackers to guess my password so that they can't access my account- 40 points

So far I've got everything up and running accept for the last "Lock for 5 minutes if 3 incorrect passwords are given within a specific time period". I'll probably do this be keeping track of both a "incorrect count" and "time" variable associated with a user in the redis database. Once the incorrect count reaches 3, the time will be stored and the server will check to see if it has been more than 5 minutes since that time (if the incorrect count is greater than 3). If it checks the timer and enough time has passed, it will reset the incorrect count.

I've got some errors with my current deployment... And they're weird ones... Let's see if I'm able to work it out so I can finish this project.

```txt
Error: getaddrinfo ENOTFOUND undefined
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (node:dns:107:26) {
  errno: -3008,
  code: 'ENOTFOUND',
  syscall: 'getaddrinfo',
  hostname: 'undefined'
}
```

It was the preferences file again... This thing keeps messing me up and because I haven't added it to the kubernetes enviroment stuff it's still "hard coded" into the docker hub image... so I'm just going to get rid of this.

Now the problem is it's getting `application/text` instead of `application/json`... I think I'll have to update the files in my `public` folder...

However this only happens if I try to use the GUI... But I don't actually have to do that. So I'm going to do the "lock out" thing.

I'm running into some issues with redis not saving my numbers as numbers? But as hex? Or strings? Anyway the actual "lock-out" functions, but the "letting people back in" doesn't... And that's enough for the final project apparently. But I want to fix it anyway.

Can I just convert all the numbers to strings? And then convert them back? Maybe? This feels like a terrible way of doing it... but maybe it's better than letting redis try to convert the numbers however it is already.

Yeah, that worked. Yay \o/

The way that I've implemented the lockout is probably *terrible*, but it works... And that's all I need.

And... that's it. I'm pretty sure that I'm done with this class... Neat.
