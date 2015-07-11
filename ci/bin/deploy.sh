#!/bin/bash

###
# Run deploy tasks.
###

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../.." && pwd)

cd ${BASE_DIR}

bash ./ci/bin/build.sh
bash ./ci/bin/deploy/deploy_docs.sh