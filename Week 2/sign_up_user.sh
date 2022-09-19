#!/bin/bash

curl -v -d "@user.json" POST -H "Content-Type:application/text" https://dev.stedi.me/user
