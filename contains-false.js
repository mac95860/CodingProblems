// Given any number of parameters, return true if none of the arguments are falsy.

function nothingIsNothing(...args) {
    const isFalsy = (value) => value; 
    
    console.log(
        args.every(isFalsy)
    );
}

nothingIsNothing(0, false, undefined, null); // false
nothingIsNothing(33, "Hello",  true,  []); // true
nothingIsNothing(true, false); // false