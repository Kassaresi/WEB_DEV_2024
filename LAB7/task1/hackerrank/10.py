#!/bin/python3

import math
import os
import random
import re
import sys

def solve(s:str):
    res=''
    listt=s.split(sep=' ')
    for i in range(len(listt)):
        listt[i]=listt[i].capitalize()
        res+=listt[i]
        res+=' '
    return res
    

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = solve(s)

    fptr.write(result + '\n')

    fptr.close()
