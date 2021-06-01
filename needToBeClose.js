//Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

arr1 = ["Frodo", "Sam", "Gandalf"]; // true
arr2 = ["Frodo", "Saruman", "Sam"]; // false
arr3 = ["Orc", "Sam", "Frodo", "Legolas"]; // true

function middleEarth(arr) {
    if(
        arr.indexOf('Frodo') === arr.indexOf('Sam') + 1 ||
        arr.indexOf('Frodo') === arr.indexOf('Sam') - 1
        ) {
            console.log(true)
        } else {
            console.log(false)
        }
}

middleEarth(arr1);
middleEarth(arr2);
middleEarth(arr3);