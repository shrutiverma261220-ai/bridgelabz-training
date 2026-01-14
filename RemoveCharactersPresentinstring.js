function removeChars(str1, str2) {
    let set = new Set(str2);
    return [...str1].filter(ch => !set.has(ch)).join("");
}

console.log(removeChars("computer", "cat"));
