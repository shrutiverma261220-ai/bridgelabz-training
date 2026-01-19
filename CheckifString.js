function isNumber(str) {
    return !isNaN(str) && str.trim() !== "";
}

// Test cases
console.log(isNumber("123"));    // true
console.log(isNumber("12.34"));  // true
console.log(isNumber("abc"));    // false
