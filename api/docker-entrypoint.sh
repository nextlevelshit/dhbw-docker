#!/bin/sh

if [ "$NODE_ENV" = "production" ]; then
  npm run build
  npm run start:prod
else
  npm run start
fi
