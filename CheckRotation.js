function isRotation(a, b) {
    return a.length === b.length && (a + a).includes(b);
}
console.log(isRotation("ABCD", "CDAB"));