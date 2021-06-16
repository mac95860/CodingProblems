//Given a letter and an array of words, return whether the letter does not appear in any of the words.
// If it DOES NOT appear, the function should return true, otherwise false;

array1 = ["rock", "paper", "scissors"];
array2 = ["spoon", "fork", "knife"];
array3 = []

const containsForbiddenLetter = (forbidden, arr) => {
    hasForbidden = true;
    
    string = JSON.stringify(arr);

    string.includes(forbidden) ?
        hasForbidden = false : hasForbidden
    
    console.log(hasForbidden);
}

containsForbiddenLetter("r", array1); // false
containsForbiddenLetter("a", array2); // true
containsForbiddenLetter("m", array3); // true