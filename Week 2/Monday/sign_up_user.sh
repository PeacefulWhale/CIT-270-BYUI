#!/bin/bash

MY_PATH=$(dirname "$0")
MY_PATH=$(cd "$MY_PATH" && pwd)

curl -v -d "@${MY_PATH}/user.json" POST -H "Content-Type:application/text" https://dev.stedi.me/user
