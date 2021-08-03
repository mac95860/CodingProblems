// Create a function that takes an array of booleans that represent whether or not a player has logged into a game that day. 
// Output the longest streak of consecutive logged in days

function dailyStreak(arr) {
    let count = 0;
    for(i = 0; i < arr.length; i++) {
        if(!arr.includes(true)) {
            count = 0
        } else if (arr[i] == true) {
            count++;
        } else {
            count = 1;
        }
    }

    return count;
}

console.log(
    dailyStreak([true, true, false, true]) // 2
)

console.log(
    dailyStreak([false, false, false]) // 0
)

console.log(
    dailyStreak([true, true, true, false, true, true]) // 3
)