#!/bin/bash

###
# Run tests.
###

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../.." && pwd)

cd ${BASE_DIR}

bash ./ci/bin/test/test_unit_tests.sh