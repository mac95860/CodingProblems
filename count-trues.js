// Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
	let count = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i]) {
			count++;
		}
	}
	return count;
}

console.log(
    countTrue([true, true, false, false, true]) // 3
)