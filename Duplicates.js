function findDuplicates(str) {
    let freq = {};
    let duplicates = [];

    for (let ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }

    for (let ch in freq) {
        if (freq[ch] > 1) {
            duplicates.push(ch);
        }
    }

    return duplicates;
}

console.log(findDuplicates("programming"));
