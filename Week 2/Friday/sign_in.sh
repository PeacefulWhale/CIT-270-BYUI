#!/bin/bash

MY_PATH=$(dirname "$0")
MY_PATH=$(cd "$MY_PATH" && pwd)

curl -v -d "@${MY_PATH}/sign-in.json" -X POST -H "Content-Type:application/json" http://localhost:3333/login
