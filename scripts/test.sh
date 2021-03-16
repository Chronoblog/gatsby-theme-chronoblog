#!/bin/bash

echo "test script"
if [ -d /examples/chronoblog-netlify-cms ]
then
    echo "dir present"
else
    echo "dir not present"
fi
