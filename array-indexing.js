// Given an index and an array, return the value of the array with the given index.

array1 = [1, 2, 3, 4, 5, 6]
array2 = [1, 2, 3, 4, 5];
array3 = [1, 2, 3, 4];

i1 = 10 / 2;
i2 = 8.0 / 2;
i3 = 6.535355314 / 2;

function valueAt(arr, i) {
    const index = Math.floor(i);
    console.log(arr[index])
}

valueAt(array1, i1); // 6
valueAt(array2, i2); // 5
valueAt(array3, i3); // 4