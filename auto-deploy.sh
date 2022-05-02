#!/bin/bash
#ssh todo
cd FINAL_PROJECT_COINMASTER && git pull origin master && cd back-end
pm2 start npm -- start & ./auto-deploy-client.sh