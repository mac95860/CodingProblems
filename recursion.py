# Create a recursive function that takes two parameters and repeats the string n number of times. 
# The first parameter txt is the string to be repeated and the second parameter is the number of 
# times the string is to be repeated.

def repetition(txt, n):
    for i in range(0, n - 1):
        txt = txt + txt
    return txt

print(repetition("cherry", 2)) # cherrycherry
print(repetition("kiwi", 1)) # kiwi
print(repetition("ab", 3)) # ababab  