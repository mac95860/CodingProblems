// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees).

function sumPolygon(n) {
	let a = 180;
	
	if(n > 3) {
		for( var i = 3; i < n; i++) {
			a += 180;
		}
		return a;
	} else {
		return a;
	}
}

console.log(
    sumPolygon(3) // 180
)

console.log(
    sumPolygon(4) // 360
)

console.log(
    sumPolygon(5) // 540
)