#!/bin/bash
#ssh todo
git pull origin master
(cd back-end && pm2 start npm -- start) & (cd front-end && pm2 start npm -- start) & \
(cd front-end && npm run build && rm -rf ../back-end/client && cp -R ./build ../back-end/client)