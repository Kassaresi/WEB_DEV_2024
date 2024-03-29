size=int(input())
x=input()
mylist=x.split(sep=' ')
mylist=[int(x) for x in mylist]

mylist.reverse()
for i in range(0,len(mylist)):
    print(mylist[i],end=' ')