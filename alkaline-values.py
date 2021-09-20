# Given a pH value, return whether that value is "alkaline" (greater than 7), "acidic" (less than 7), 
# or "neutral" (7). Return "invalid" if the value given is less than 0 or greater than 14.

def pH_name(pH):
    if pH > 0 and pH <= 6:
        print('acidic')
    elif pH == 7:
        print('neutral')
    elif pH >= 8 and pH <= 14:
        print('alkaline')
    else:
        print('invalid')

pH_name(5.7) # acidic
pH_name(15) # invalid
pH_name(7) # neutral
pH_name(9) # alkaline

