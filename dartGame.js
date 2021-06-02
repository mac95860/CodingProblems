// create a function that takes the x and y coordinates of a dart on the board and return its score



function calculateScore(x, y) {
   score = Math.hypot(x, y) > 10 ? 0 : Math.hypot(x, y) > 5 ? 1 : Math.hypot(x, y) > 1 ? 5 : 10
   console.log(score)
}

calculateScore(0, -0.8);
calculateScore(0, 10);
calculateScore(-5, 0);