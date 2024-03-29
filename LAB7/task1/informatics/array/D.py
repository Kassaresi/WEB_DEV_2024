size=int(input())
x=input()
mylist=x.split(sep=' ')
mylist=[int(x) for x in mylist]
count=0

for i in range(1,size):
    if(mylist[i]>mylist[i-1]):
        count+=1

print(count)