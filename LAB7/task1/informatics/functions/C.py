def xor(x, y):
    if (x and y) or (not x and not y):
        return False
    return True


a, n = input().split()

if (xor(bool(int(a)), bool(int(n)))):
    print(1)
else:
    print(0)