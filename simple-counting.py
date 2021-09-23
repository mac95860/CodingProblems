# You have to create a function that takes two integers n and d and makes a list of squares of all numbers from 0...<= n and returns the count of the digits d in the list

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

count_digits(10, 1) # 4
count_digits(25, 2) # 9

         