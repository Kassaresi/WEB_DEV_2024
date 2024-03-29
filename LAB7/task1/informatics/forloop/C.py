import math

a=int(input())
b=int(input())

for i in range(int(math.sqrt(a)),int(math.sqrt(b))+1):
        square = i**2
        if square >= a and square <= b:
            print(square, end=' ')
