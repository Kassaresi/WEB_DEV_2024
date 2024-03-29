import math

a = int(input())
count=0

if a==1:
    print(1)
else:  
    for i in range(2, int(math.sqrt(a)) + 1):
        if a % i == 0:
            count += 2 if i * i != a else 1
    print(count+2)
            
    