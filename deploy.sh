#!/bin/sh

yarn install
pm2 start dist/main.js --no-daemon