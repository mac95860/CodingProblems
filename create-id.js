// Many IDS (for emails or Google ID) are created using the person's name.

// Create a function that will return a four-character ID using the person's first name and last name. 
// The first character will be the first letter of the first name but in lowercase. 
// The next three characters will be the first three characters of the last name, 
// but the first letter will be capitalized and the other two will be in lower case.

const createId = (first, last) =>
   console.log( 
    first[0].toLowerCase() +
    last[0].toUpperCase() +
    last.slice(1, 3).toLowerCase()
   );

createId('John', "Smith"); // jSmi
createId('jOHN', 'wASHINGTON');// jWas
createId('Mike', 'cErVaNtEs'); // mCer