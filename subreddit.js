// Create a function to extract the name of the subreddit from its URL.

function subReddit(link) {
	return link.slice(25, -1);
}

console.log( subReddit("https://www.reddit.com/r/funny/") ); // funny
console.log( subReddit("https://www.reddit.com/r/relationships/") ); // relationships
console.log( subReddit("https://www.reddit.com/r/mildlyinteresting/") ); //mildlyinteresting