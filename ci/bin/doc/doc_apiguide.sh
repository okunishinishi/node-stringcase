#!/bin/bash

###
# Create apiguide.
##

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

rm -rf docs/apiguide

npm run apiguide -- README.md ${BASE_DIR}/index.js ${BASE_DIR}/lib/*.js \
--verbose \
--destination ${BASE_DIR}/docs/apiguide \
--template ${BASE_DIR}/node_modules/ink-docstrap/template \
--configure ${BASE_DIR}/docs/.apiguide.json
