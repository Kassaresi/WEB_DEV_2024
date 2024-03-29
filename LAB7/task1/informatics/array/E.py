size=int(input())
x=input()
mylist=x.split(sep=' ')
mylist=[int(x) for x in mylist]
finded=False

for i in range(1,size):
    if(mylist[i]>0 and mylist[i-1]>0) or (mylist[i]<0 and mylist[i-1]<0):
        print("YES")
        finded=True
        break
if(not finded):
    print("NO")



