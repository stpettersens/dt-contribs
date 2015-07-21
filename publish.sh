#!/bin/sh
# Publish a module here to my DefinitelyTyped fork.
# Usage: sh publish module_name

mkdir ../DefinitelyTyped/$1
cp $1/$1.d.ts ../DefinitelyTyped/$1
cp $1/$1-tests.ts ../DefinitelyTyped/$1
cd ../DefinitelyTyped
git add $1
git commit -a -m "Type definitions and tests for $1"
git status
