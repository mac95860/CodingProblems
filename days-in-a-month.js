// Create a function that takes the month and year (as integers) and returns the number of days in that month.

function daysInMonth (month, year) { 
    return new Date(year, month, 0).getDate();
  }
  
  console.log(daysInMonth(2, 1999)); //28
  console.log(daysInMonth(2, 2000)); //29
  console.log(daysInMonth(5, 1990)); //31