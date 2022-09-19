#!/bin/bash

curl -v -d "@customer.json" POST -H "Content-Type:application/text" https://dev.stedi.me/customer
