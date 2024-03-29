size=int(input())


x=input()
mylist=x.split(sep=' ')
mylist=[int(x) for x in mylist]
for i in range(0,size,2):
            
    print(mylist[i])