#!/bin/bash

CURRENT_PATH=$(pwd)
APP_DIRECTORY="$CURRENT_PATH/code/app"
API_DIRECTORY="$CURRENT_PATH/code/api"

# build static app
cd "$APP_DIRECTORY" && \
  yarn && yarn build

cd $CURRENT_PATH

docker-compose up
