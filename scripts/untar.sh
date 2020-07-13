#!/usr/bin/env sh
set -x
export NODE_ENV=production
export NVM_BIN=$HOME/.nvm/versions/node/v12.18.1/bin
rmdir -R html/ && \
cd /var/www/test.jesusamador.com/ && \
tar zxvf package.tgz -C . && \
mv personal/ /var/www/test.jesusamador.com/html && \
# mv build/package.json . && \
npm install
# && \
# npm run start