#!/bin/bash

###
# Run release tasks.
###

HERE=$(cd "$(dirname $0)" && pwd)
BASE_DIR=$(cd "${HERE}/../.." && pwd)

cd ${BASE_DIR}

echo "Sure to release new version (y/N)? "
read -p ">> " answer
case ${answer:0:1} in
    y|Y )

        bash ./ci/bin/build.sh
        bash ./ci/bin/test.sh
        bash ./ci/bin/cover.sh
        bash ./ci/bin/doc.sh
        bash ./ci/bin/deploy.sh
        npm run versionup
        npm publish .
        node ./ci/bin/tag/tag_git.js
        git add . -A
        git commit -m 'Version up'
        git push

    ;;
    * )
        echo aborted.
    ;;
esac
