#!/bin/bash
ssh root@67.207.83.112 << EOF
yes | /opt/MNG/MNGVIEWHP/fe/uninstall
cd final-project-coinmaster
git pull origin master
cd front-end && npm install && npm run build && rm -rf ../back-end/client && cp -R ./build ../back-end/client
cd ../back-end && npm install && pm2 start npm -- start
EOF