ps -ax | grep 'node' | grep -v grep | awk '{print $1}' | xargs kill -9
../build.sh
npm run server:prod&