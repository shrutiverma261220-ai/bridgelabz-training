function isNumber(str) {
    if (str.trim() === "") return false;
    return !isNaN(str);
}
