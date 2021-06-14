import math

# Given a number n, find if its 2nd, 4th and 8th roots are all integers (perfect roots), return True if it exists, False if not.

def perfectRoots(n): 
    secondRoot = math.sqrt(n)
    fourthRoot = math.sqrt(secondRoot)
    eighthRoot = math.sqrt(fourthRoot)
    if secondRoot.is_integer() and fourthRoot.is_integer() and eighthRoot.is_integer():
        print(True)
    else: 
        print(False)

perfectRoots(1000) # False
perfectRoots(6561) # True