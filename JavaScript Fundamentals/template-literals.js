// ES6 - to embed expressions and to create multiline strings

const name = "Suriya";
const age = 26;

// Using template literal
const greeting = `Hello, my name is ${name} and I'm ${age} years old.`

// Multiline template literal
const message = `
    Welcome to our app!
    Your profile details:
    - Name: ${name}
    - Age: ${age}
`;

console.log("Greeting msg: ", greeting);
console.log("Multiline msg: ", message);
