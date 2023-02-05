function lowerOrUpper(char) {
    let asciiCharValue = char.charCodeAt();
    if (asciiCharValue >= 65 && asciiCharValue <= 90) {
        console.log('upper-case');
    }
    if (asciiCharValue >= 97 && asciiCharValue <= 122) {
        console.log('lower-case');
    }

}
lowerOrUpper('L');
lowerOrUpper('a');