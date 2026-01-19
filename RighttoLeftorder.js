function rightRotate(str, k) {
    k = k % str.length; // handle large k
    return str.slice(-k) + str.slice(0, str.length - k);
}

// Test
console.log(rightRotate("abcde", 1)); // "eabcd"
