// Write a function that maps files to their extension names.

function getExtension(arr) {
	const newArr = arr.map(value => {
        const newValue = value.split('.');
        for (var i = 0; i < newValue.length; i++) {
            return newValue[1]
        }
	});

    return newArr;
}

console.log(getExtension(["index.html", "style.css"])); //[ 'html', 'css' ]
console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])); //[ 'jpg', 'pdf', 'mp3' ]