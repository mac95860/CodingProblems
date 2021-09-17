// Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).

const isSafeBridge = str => str.includes(' ') ? false : true 

isSafeBridge("#"); // true
isSafeBridge("## ###"); // false
isSafeBridge("######"); // true