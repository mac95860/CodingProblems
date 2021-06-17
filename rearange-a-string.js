// Create a function that takes a string and returns a string with its letters in alphabetical order.

function rearange(str) {
    var arr = str.split('');
    var tmp;
    for(var i = 0; i < arr.length; i++) {
        for(var j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
        
    }
    console.log(arr.join(''))
}

rearange("hello"); // ehllo
rearange("edabit"); // abdeit
rearange("javascript"); // aacijprstv
