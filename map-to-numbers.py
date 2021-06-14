array1 = ["Christmas", "Thanksgiving", "Halloween"]
array2 = ["hello", "world"]
array3 = ["This", "is", "an", "array"]

def changeToNumbers(arr):
    newArray = []
    for var in arr:
        newArray.append(len(var))
    print(newArray)

changeToNumbers(array1) # [9, 12, 9]
changeToNumbers(array2) # [5, 5]
changeToNumbers(array3) # [4, 2, 2, 5]