// Write a function that partitions the array into two subarrays: 
//    one with all even integers, and the other with all odd integers. 
//Return your result in the following format: [odds][evens]

array1 = [1,2,3,4,5];
array2 = [1, 0, 1, 0, 1, 0];
array3 = [1, 3, 5, 7, 9];
array4 = [];

const splitTheArray = arr => {
    odds = arr.filter(n => n % 2 !== 0);
    evens = arr.filter(n => n % 2 == 0);
    console.log(odds, evens)
}

splitTheArray(array1); // [1,3,5] [2,4]
splitTheArray(array2); //[1,1,1] [0,0,0]
splitTheArray(array3); // [1,3,5,7,9] []
splitTheArray(array4); // [] []
