function repeatString(string, repetition) {
    let result = "";
    for (let i = 0; i < repetition; i++) {
        result += string;
    }
    return result;
}
console.log(repeatString('abc', 4));