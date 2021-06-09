//Google's logo can be stretched depending on how many pages it lets you skip forward to.
//Let's say we wanted to change the number of pages that Google could skip to. 
//Create a function where given a number of pages n, return the word "Google" but with the correct number of "o"s.

const googlify = n => n > 1 ? console.log( `G${"o".repeat(n)}gle` ) : console.log("invalid")

googlify(10); // Goooooooooogle
googlify(2); // Google
googlify(23); // Gooooooooooooooooooooooogle
googlify(-2); // invalid