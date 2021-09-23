def count_digits(n, d):
    d = str(d)
    arr = []
    i = 0
    while i <= n:
       value = i**2
       arr.append(value)
       i += 1
    string = str(arr)
    
    print(string.count(d))

count_digits(10, 1)
         