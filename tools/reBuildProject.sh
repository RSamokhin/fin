ps ax | grep 'node' | grep -v grep | awk '{print $1}' | xargs kill -9 --
./build.sh
cd server
npm run server:prod&