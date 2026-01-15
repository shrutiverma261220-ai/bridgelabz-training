function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}

// Example
let input = "java is awesome";
let output = toTitleCase(input);
console.log(output);
