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

// Exercises
// 1. Create a function that generates a personalized email template.
function createEmailTemplate(name, product, price) {
    return `
        Dear ${name},

        Thank you for your interest in ${product}!
        The total price will be $${price}.

        Best regards,
        The Store Team.
    `
}

console.log("Email Template: ", createEmailTemplate('Suriya', "Titan Watch", 25));

// 2. Create a function that generates HTML elements with dynamic classes and content.
function createCard(title, content, isFeature) {
  return `
    <div class="card ${isFeature ? 'featured' : 'regular'}">
      <h2 class="${isFeature ? 'text-gold' : 'text-black'}">${title}</h2>
      <p>${content.length > 100 ? content.substring(0, 100) + '...' : content}</p>
      ${isFeature ? '<span class="feature-badge">Featured</span>' : ''}
    </div>
  `;
}

console.log('Card Element: ', createCard("Card Title", "This will be card content in just a few lines", true));
