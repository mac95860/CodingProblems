// Create a function that returns the smaller of two numbers

function smallerNum(n1, n2) {
    return Math.min(n1, n2).toString();
}

console.log(
    smallerNum(21, 151)  // '21'
);

console.log(
    smallerNum(45, 2) // '2'
);

console.log(
    smallerNum(1, 1) // '1'
)