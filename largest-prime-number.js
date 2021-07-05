// create a function that returns the larges prime number in a given range.

function range(start, end) {
    return Array.apply(0, Array(end - 1))
        .map((element, index) => index + start);
}

function returnLargestPrime(n1, n2) {
    if(n1 < n2) {
        arr = range(n1, n2);
    } else {
        [n1, n2] = [n2, n1];
        arr = range(n1, n2);
    }
    
    primes = arr.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });

    largestPrime = Math.max(...primes);

    console.log(largestPrime);
    return largestPrime;
}

returnLargestPrime(2, 10); //7
returnLargestPrime(4, 24); //23
returnLargestPrime(10, 2); // 7