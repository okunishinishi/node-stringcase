#!/bin/bash

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

npm run cover -- \
${BASE_DIR}/test/unit_tests/*_test.js --dir docs/reports/coverage