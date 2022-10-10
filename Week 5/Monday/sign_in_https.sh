#!/bin/bash

MY_PATH=$(dirname "$0")
MY_PATH=$(cd "$MY_PATH" && pwd)

curl --insecure -v -d "@${MY_PATH}/data.json" POST -H "Content-Type:application/json" https://192.168.64.9:4444/user
curl --insecure -v -d "@${MY_PATH}/data.json" -X POST -H "Content-Type:application/json" https://192.168.64.9:4444/login
