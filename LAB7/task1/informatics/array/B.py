size=int(input())


x=input()
mylist=x.split(sep=' ')
mylist=[int(x) for x in mylist]
for i in range(0,size):
    if(mylist[i]%2==0):
        print(mylist[i])