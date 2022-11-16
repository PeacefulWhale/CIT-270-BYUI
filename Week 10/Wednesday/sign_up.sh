#!/bin/bash

MY_PATH=$(dirname "$0")
MY_PATH=$(cd "$MY_PATH" && pwd)

curl -v -d "@${MY_PATH}/data.json" POST -H "Content-Type:application/json" https://peacefulwhale.cit270.com/user
curl -v -d "@${MY_PATH}/data.json" -X POST -H "Content-Type:application/json" https://peacefulwhale.cit270.com/login
