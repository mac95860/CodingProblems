// Create a function that filters out an array of state names into two categories based on the second parameter.
// 1. Abbreviations => abb
// 2. Full names => full

array1 = ["Arizona", "CA", "NY", "Nevada"];
array2 = ["MT", "NJ", "MO", "KS", "NC"];

const filterStateNames = (arr, cond) => 
    cond === "abb" ? 
        console.log(arr.filter(i => i.length < 3)) 
    : 
        console.log(arr.filter(i => i.length > 2))

filterStateNames(array1, "abb"); // [ 'CA', 'NY' ]
filterStateNames(array1, "full");// [ 'Arizona', 'Nevada' ]
filterStateNames(array2, "abb");//  [ 'MT', 'NJ', 'MO', 'KS', 'NC' ]
filterStateNames(array2, "full");// []