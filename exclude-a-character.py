list = ["h", "e", "l", "l", "o", "\o"]
list2 = ["H", "e", "l", "l", "o", "!", "\0"]
list3 = ["J", "A", "V", "a", "\0"]

def excludeCharacter(l):
    l.pop(-1)
    separator = ""
    print(separator.join(l))
    
excludeCharacter(list) # hello
excludeCharacter(list2) # Hello!
excludeCharacter(list3) # JAVa