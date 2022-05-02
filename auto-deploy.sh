#!/bin/bash
ssh -o StrictHostKeyChecking=no "root@67.207.83.112"
ssh root@67.207.83.112 <<EOF
cd final-project-coinmaster
git pull origin master
cd front-end && npm install && npm run build && rm -rf ../back-end/client && cp -R ./build ../back-end/client
cd ../back-end && npm install && pm2 start npm -- start
EOF