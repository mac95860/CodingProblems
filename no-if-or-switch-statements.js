// Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

function error(n) {
	return {
		1: 'Check the fan: e1',
		2: 'Emergency stop: e2',
		3: 'Pump Error: e3',
		4: 'c: e4',
		5: 'Temperature Sensor Error: e5',
	}[n] || 101
}

console.log(error(3)); //Pump Error: e3
console.log(error(5)); //Temperature Sensor Error: e5
console.log(error(0)); // 101