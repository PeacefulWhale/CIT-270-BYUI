#!/bin/bash

# This is just here so I can test to see if the "No token for you" thing works like it should.

MY_PATH=$(dirname "$0")
MY_PATH=$(cd "$MY_PATH" && pwd)

curl -v -d "@${MY_PATH}/sign-in.json" -X POST -H "Content-Type:application/json" http://localhost:3333/login
