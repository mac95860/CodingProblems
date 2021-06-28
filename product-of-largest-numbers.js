array1 = [2,3,1,-1,2];
array2 = [-1, -1, -2, -2];
array3 = [8, 8, 8];

function product(arr) {

   arr = Array.from(new Set(arr)).sort((a,b) => b-a);
   return arr.length == 1 ?Math.pow(arr[0], 2) : arr[0] * arr[1];
}

product(array1); // 6
product(array2); // 2
product(array3) //64