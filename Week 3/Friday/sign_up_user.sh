#!/bin/bash

MY_PATH=$(dirname "$0")
MY_PATH=$(cd "$MY_PATH" && pwd)

curl -v -d "@${MY_PATH}/user.json" POST -H "Content-Type:application/json" http://192.168.64.9:3333/user
