#!/bin/bash

###
# Send coverage report.
###

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

npm run report -- < ${BASE_DIR}/docs/reports/coverage/lcov.info