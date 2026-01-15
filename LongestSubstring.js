function longestUniqueSubstring(str) {
    let longest = "";
    let current = "";

    for (let ch of str) {
        if (current.includes(ch)) {
            current = current.slice(current.indexOf(ch) + 1);
        }
        current += ch;

        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest;
}

// Example
let input = "abcabcbb";
let result = longestUniqueSubstring(input);

console.log("Output:", result);
console.log("Length:", result.length);
