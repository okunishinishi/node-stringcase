#!/bin/bash

###
# Build project.
###

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../.." && pwd)

cd ${BASE_DIR}

bash ./ci/bin/struct.sh
bash ./ci/bin/render.sh