def min(a, b, c, d):
    if a < b and a < c and a < d:
        return a
    elif b < c and b < d:
        return b
    elif c < d:
        return c
    else:
        return d

mylist = list(map(int, input().split()))
print(min(*mylist[:4]))