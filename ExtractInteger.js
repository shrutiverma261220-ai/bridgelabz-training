let str = "abc123def45";

let numbers = str.match(/\d+/g).map(Number);

console.log(numbers); // [123, 45]
