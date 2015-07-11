#!/bin/bash

###
# Structure directories.
###

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../../.." && pwd)

cd ${BASE_DIR}

mkdir -p ci
mkdir -p ci/bin
mkdir -p ci/bin/cover
mkdir -p ci/bin/deploy
mkdir -p ci/bin/doc
mkdir -p ci/bin/report
mkdir -p ci/bin/render
mkdir -p ci/bin/struct
mkdir -p ci/bin/tag
mkdir -p ci/bin/test
mkdir -p docs
mkdir -p docs/reports
mkdir -p docs/readme
mkdir -p docs/readme/sections
mkdir -p lib
mkdir -p test
mkdir -p test/unit_tests