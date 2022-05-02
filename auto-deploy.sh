#!/bin/bash
#ssh todo
git pull origin master
cd front-end && npm install && npm run build && rm -rf ../back-end/client && cp -R ./build ../back-end/client
pm2 start npm -- start
cd ../back-end && npm install && pm2 start npm -- start