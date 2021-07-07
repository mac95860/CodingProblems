# Create a function that returns true if a string is plural or false if it is singular

def pluralOrSingular(str):
    print(str.endswith("s"))

pluralOrSingular("Apple") # False
pluralOrSingular("Strawberries") # True