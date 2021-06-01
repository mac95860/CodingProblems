// An array of strings has one value that is === "flick"
// Crete a function that returns an array of booleans where if "flick" appears, it is false and every value after is also false

arr1 = ["edabit", "flick", "eda", "bit"]; // [true, false, false, false]
arr2 = ["flick", "bit", "eda", "edabit"]; // [false, false, false, false]
arr3 = ["bit", "eda", "edabit", "flick"]; // [true, true, true, false]
bool = true

function flickSwitch(arr, bool){
    const map = arr.map(i => i == "flick" ? bool = !bool : bool) ;

    console.log(map)
}

flickSwitch(arr1, bool);
flickSwitch(arr2, bool);
flickSwitch(arr3, bool);
