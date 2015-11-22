#!/usr/bin/env bash

rm -rf web/build
cd web
npm install -g bower gulp
npm prune
npm install
npm update
bower prune
bower update
bower install
gulp build

cd ../server
npm install -g forever
npm prune
npm install
npm update

