# Create a function that takes a string str and performs simple encoding as per the following method:
    # Replace all single occurrence characters with [
    # Replace all characters with two or more occurrences with ]
# Return the final string after modification.

def simple_encoder(string):
   newString = ""
   lwr_case_string = string.lower()
   for char in lwr_case_string:
       if lwr_case_string.count(char) > 1:
           newString += "]"
       else:
           newString += "["
   print(newString)
   
simple_encoder("GaBby") # [[]][
simple_encoder("babble") # ][]][[
simple_encoder("Mubashir") # [[[[[[[[
simple_encoder("Matt") # [[]]
simple_encoder("eD  aBiT") # [[]][[[[