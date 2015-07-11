#!/bin/bash

###
# Create documents.
###

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../.." && pwd)

cd ${BASE_DIR}

bash ./ci/bin/doc/doc_readme.sh
bash ./ci/bin/doc/doc_apiguide.sh
