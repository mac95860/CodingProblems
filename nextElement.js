// Return the next element in the sequence:

arr1 = [2, 1, 0, -1, -2]; //-3
arr2 = [2, 2, 2, 2, 2 ]; // 2
arr3 = [2, 4, 6, 8, 10]; // 12
arr4 = [-3, -7, -11, -15]; // -19

function nextElement(arr) {
    const lastEl = arr[arr.length - 1];
    let constant = Math.abs(lastEl - arr[arr.length - 2]);
    if(lastEl < 0) {
        constant = -(constant);
    }
    console.log(lastEl + constant);
}

nextElement(arr1);
nextElement(arr2);
nextElement(arr3);
nextElement(arr4);
