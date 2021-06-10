// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

array1 = [1, 2, 0, 1, 3, 10, 10, 10, 10, 2];
array2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 100];
array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const maximumTotal = array => {
    const reducer = (acc, curr) => acc + curr;
    array.sort((a, b) => {
        return a - b
    });

    const newArray = array.slice(-5);

    console.log(newArray.reduce(reducer))
}

maximumTotal(array1); //43
maximumTotal(array2); //100
maximumTotal(array3); //40

