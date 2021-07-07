// A built-in timer inside your car can count the length of your ride in minutes and you have started your ride at 00:00.

// Given the number of minutes n at the end of the ride, calculate the current time. 
// Return the sum of digits that the digital timer in the format hh:mm will show at the end of the ride.

function carTimer(n) {
    const minutes = n/60;
    const hundredths = Math.floor(minutes * 100) / 100;
    let str = hundredths.toString();
    const splitUp = str.split('');
    const arr = [];
    const reducer = (a, b) => a + b;
    
    for(var i = 0; i < splitUp.length; i++){    
        if(Number.isInteger( parseInt(splitUp[i]) )){
            arr.push(parseInt(splitUp[i]));
        }
    }
    
    return arr.reduce(reducer);
}

console.log(carTimer(240)); // 4
console.log(carTimer(808)); // 14
console.log(carTimer(14)); // 5