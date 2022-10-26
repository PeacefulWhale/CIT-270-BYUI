#!/bin/bash

# This has to ran in the background.
redis-server &

# So redis-server can start
sleep 5s

node main.js
