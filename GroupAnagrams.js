function groupAnagrams(words) {
    let map = {};

    for (let word of words) {
        let key = word.split("").sort().join("");
        if (!map[key]) {
            map[key] = [];
        }
        map[key].push(word);
    }
    console.log(Object.values(map));
}

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
