#!/bin/bash

###
# Run unit tests.
###

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

npm run unittest -- ${BASE_DIR}/test/unit_tests/*_test.js ${BASE_DIR}/test/unit_tests/*_test.js