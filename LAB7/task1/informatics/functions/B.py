def power(a, n):
    a = float(a)
    n = int(n)
    if n == 0:
        return 1
    
    result = a
    for i in range(n - 1):
        result *= a
    return result


a, n = input().split()

print(power(a, n))