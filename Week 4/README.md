# Week Four

## Monday

We learned about visualizing programs / what pipes and sockets are.

I fixed my redis-sever so `hexists` works now (which I can't stop reading as `hex-exists`).

## Wednesday

Now the server supports signing and logging up.

Currently the server saves the entire json dump... Which feels pretty weird to do. I'll try to see what the "best practices" are with Redis, and if I'm following them currently.

It looks like there is a better way to store json with redis: [https://redis.com/redis-best-practices/data-storage-patterns/json-storage/]. There is a module called [RedisJSON](https://docs.redis.com/latest/modules/redisjson/redisjson-quickstart/).

I'll get around to setting this up and working with it eventually, but for now reading and parsing JSON strings will do.

Also `http` stuff isn't secure... But this is also a local VM that can only be connected to from my machine. And what would one do if they gained control over this VM? At that point they probably can own my entire system and I have bigger problems.
