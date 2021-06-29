// Write a function that takes the number of seconds and returns the digital format clock time as a string. Time should be counted from 00:00:00.

function digitalClock(seconds) {
   clock =  new Date(seconds * 1000).toISOString().substr(11, 8)
   console.log(clock);
}

digitalClock(5025); // 01:23:45
digitalClock(61201); // 17:00:01
digitalClock(87000); // 00:10:00
