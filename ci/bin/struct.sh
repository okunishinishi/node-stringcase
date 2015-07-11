#!/bin/bash

###
# Run structure shells.
###

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../.." && pwd)

cd ${BASE_DIR}

bash ./ci/bin/struct/struct_dir.sh
bash ./ci/bin/struct/struct_mode.sh