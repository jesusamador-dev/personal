#!/usr/bin/env sh
set -x
base=$(basename $PWD) && \
cd .. && \
tar -czf package.tgz $base && \
scp package.tgz $REMOTE_USER@$REMOTE_HOST:$REMOTE_APP_DIR && \
ssh $REMOTE_USER@$REMOTE_HOST 'bash -s' < ./scripts/untar.sh