
const numbers = [1,2,3,4,5];

const doubled = numbers.map(num => num * 2);
console.log("Doubled : ", doubled);

const evenNumbers = numbers.filter(num => num%2===0);
console.log("Even Numbers : ", evenNumbers);

const sum = numbers.reduce((acc, cur) => acc + cur,0);
console.log("Sum : ", sum);