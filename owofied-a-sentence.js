// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

const string1 = "I'm gonna ride 'til I can't no more";
const string2 = "Do you ever feel like a plastic bag";
const string3 = "Cause baby you're a firework";

const owofied = str => console.log( str.replace("i", "wi").replace("e", "we") + " owo" );

owofied(string1); 
owofied(string2);
owofied(string3);