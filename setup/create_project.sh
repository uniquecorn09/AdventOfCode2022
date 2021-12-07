#!/bin/bash
DAYS_OF_CODING=1
cd ..
for (( i = 1; i <= $DAYS_OF_CODING; i++ )) 
do 
    folder="day$i"
    mkdir $folder
    cd $folder
    # curl https://adventofcode.com/2019/day/$i > raw$i.html
    touch data.txt
    touch testdata.txt
    touch aoc.js
    cd ..
done