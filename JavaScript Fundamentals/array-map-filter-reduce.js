
const numbers = [1,2,3,4,5];

const doubled = numbers.map(num => num * 2);
console.log("Doubled : ", doubled);

const evenNumbers = numbers.filter(num => num%2===0);
console.log("Even Numbers : ", evenNumbers);

const sum = numbers.reduce((acc, cur) => acc + cur,0);
console.log("Sum : ", sum);

// ❌ Wrong: Using map for filtering
const positives = numbers.map(num => {
    if (num > 2) return num;
});
console.log("Positives : ", positives);
// Results in Positives :  [ undefined, undefined, 3, 4, 5 ]

// ✅ Correct: Use filter instead
const positiveNumbers = numbers.filter(num => num > 0);
console.log("positiveNumbers : ", positiveNumbers);

const items = [{price: 10}, {price: 20}];
const totalPrice = items.reduce((sum, item) => sum + item.price, 10);
console.log("total price : ", totalPrice);

// ✅ Correct: Include initial value
// const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

const apiResponse = [
  { id: 1, userData: { name: 'John', age: 25 } },
  { id: 2, userData: { name: 'Sarah', age: 30 } }
];

const processedData = apiResponse.reduce((acc, item) => {
  acc[item.id] = item.userData;
  return acc;
}, {});

console.log(processedData[1]);

const products = [
  { name: 'Apple', price: 1, category: 'fruit' },
  { name: 'Monitor', price: 200, category: 'electronics' },
  { name: 'Banana', price: 0.5, category: 'fruit' },
  { name: 'Orange', price: 2, category: 'fruit' }
];

// Solution
const expensiveFruits = products
  .filter(product => product.category === 'fruit' && product.price > 0.8)
  .map(product => ({
    name: product.name,
    priceWithTax: product.price * 1.1
  }));

console.log("expensiveFruits : ", expensiveFruits)