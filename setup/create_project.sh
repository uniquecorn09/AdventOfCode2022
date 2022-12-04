#!/bin/bash
DAYS_OF_CODING=2
for (( i = 1; i <= $DAYS_OF_CODING; i++ )) 
do 
    folder="day$i"
    if [ -d "day$i" ]; then
        echo "Project day$i exists"
    else
        mkdir $folder
        cd $folder
        pwd
        cp ../setup/_aoc.js aoc.js
        cp ../setup/_aoc.test.js aoc.test.js
        sed -i 's/DAY = 1/DAY = '$i'/' aoc.js
        curl https://adventofcode.com/2022/day/$i > raw$i.html
        touch data.txt
        touch testdata.txt
        cd ..
    fi
done