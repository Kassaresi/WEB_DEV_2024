x=input()
conut=''

for i in range(len(x)-1,-1,-1):
    conut+=x[i]
print(int(conut))