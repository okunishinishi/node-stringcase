#!/bin/bash

###
# Run cover tasks.
###

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../.." && pwd)

cd ${BASE_DIR}

bash ./ci/bin/cover/cover_unit_tests.sh