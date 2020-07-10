#!/usr/bin/env sh
set -x
base=$(basename $PWD) && \
cd .. && \
tar -czf package.tgz $base && \
scp package.tgz $REMOTEUSER@$REMOTEHOST:$REMOTEAPPDIR && \
ssh $REMOTEUSER@$REMOTEHOST 'bash -s' < ./untar.sh