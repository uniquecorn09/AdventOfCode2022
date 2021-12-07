#!/bin/bash
DAYS_OF_CODING=2
cd ..
for (( i = 1; i <= $DAYS_OF_CODING; i++ )) 
do 
    folder="day$i"
    mkdir $folder
    cd $folder
    cp ../setup/_aoc.js aoc.js
    cp ../setup/_aoc.test.js aoc.test.js
    sed -i 's/DAY = 1/DAY = '$i'/' aoc.js
    # curl https://adventofcode.com/2019/day/$i > raw$i.html
    touch data.txt
    touch testdata.txt
    cd ..
done