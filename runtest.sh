#!/bin/sh
if test "$1" == "" ; then
    npm run test
    exit
fi

F="./features/$1.feature"
if [ ! -f $F ] ; then
    echo no file $F
    exit
fi
clear
tsc
cp ./build/src/*js* ./src 
cp ./build/src/helpers/*js* ./src/helpers
cp ./build/features/support/*js* ./features/support
cp ./build/features/world/*js* ./features/world
./node_modules/.bin/cucumber-js $F

