// there are three string arguments (first, last, and word). 
// write a function that returns true or false if "word" is between "first" and "last" in the dictionary

function isBetween(first, last, word) {
    if (word > first && word < last) {
        console.log(true);
    } else {
        console.log(false);
    }
}

isBetween("apple", "banana", "azure"); // true
isBetween("monk", "monument", "monkey"); // true
isBetween("bookend", "boolean", "boost"); // false

