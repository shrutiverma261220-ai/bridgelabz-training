function countVC(str) {
    let v = 0, c = 0;

    for (let ch of str.toLowerCase()) {
        if (ch >= 'a' && ch <= 'z') {
            if ("aeiou".includes(ch)) v++;
            else c++;
        }
    }

    console.log("Vowels:", v, "Consonants:", c);
}

countVC("Hello World");
