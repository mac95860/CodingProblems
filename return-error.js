// Create a function that takes a number as an argument and returns the appropriate error message. 
// You should do this without using the switch or if statements.

function error(n) {
	var a = new Object();
	
	a = {
	1 : "Check the fan: e1",
	2 : "Emergency stop: e2",
	3 : "Pump Error: e3",
	4 : "c: e4",
	5 : "Temperature Sensor Error: e5"
	}
	
	return n > 5 || n < 1 ? 101 : a[n];
}

console.log(
    error(4) // c: e4
)
console.log(
    error(2) // Emergency stop: e2
)

console.log(
    error(6) // 101
)