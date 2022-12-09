#!/bin/bash

# The data here purposefully has a bad password...

MY_PATH=$(dirname "$0")
MY_PATH=$(cd "$MY_PATH" && pwd)

curl -v -d "@${MY_PATH}/data.json" POST -H "Content-Type:application/json" https://peacefulwhale.cit270.com/user
# 3 bad login attempts
curl -v -d "@${MY_PATH}/bad_data.json" POST -H "Content-Type:application/json" https://peacefulwhale.cit270.com/login
curl -v -d "@${MY_PATH}/bad_data.json" POST -H "Content-Type:application/json" https://peacefulwhale.cit270.com/login
curl -v -d "@${MY_PATH}/bad_data.json" POST -H "Content-Type:application/json" https://peacefulwhale.cit270.com/login

# See if the lock out is working.
sleep 5
curl -v -d "@${MY_PATH}/bad_data.json" POST -H "Content-Type:application/json" https://peacefulwhale.cit270.com/login
sleep 5
curl -v -d "@${MY_PATH}/bad_data.json" POST -H "Content-Type:application/json" https://peacefulwhale.cit270.com/login
sleep 5
curl -v -d "@${MY_PATH}/bad_data.json" POST -H"Content-Type:application/json" https://peacefulwhale.cit270.com/login
sleep 5
curl -v -d "@${MY_PATH}/bad_data.json" POST -H"Content-Type:application/json" https://peacefulwhale.cit270.com/login
