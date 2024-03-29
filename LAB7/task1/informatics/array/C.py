size=int(input())
x=input()
mylist=x.split(sep=' ')
mylist=[int(x) for x in mylist]
count=0

for i in range(0,size):
    if(mylist[i]>0):
        count+=1
print(count)