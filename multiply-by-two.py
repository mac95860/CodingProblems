# Create a function that takes a list with numbers and return a list with the elements multiplied by two.

def multiplyByTwo(arr):
    arr = [x * 2 for x in arr]
    print(arr)

multiplyByTwo([2, 5, 3]) #[4, 10, 6]
multiplyByTwo([1, 86, -5]) # [2, 172, -10]
multiplyByTwo([5, 382, 0]) # [10, 764, 0]
