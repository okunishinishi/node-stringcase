#!/bin/bash

###
# Structure directories.
###

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

mkdir -p ci
mkdir -p ci/bin
mkdir -p ci/bin/struct
mkdir -p ci/bin/compile
mkdir -p ci/bin/test
mkdir -p docs
mkdir -p lib
mkdir -p test
mkdir -p test/unit_tests