// Given the side length x find the area of a hexagon. Round to the nearest Tenth.

function area(n) {
    const result = (3 * Math.sqrt(3) * Math.pow(n, 2)) / 2;
    const final = Number.parseFloat(result).toFixed(1);
    console.log(final); 
}

area(1); // 2.6
area(2); // 10.4
area(3); // 23.4