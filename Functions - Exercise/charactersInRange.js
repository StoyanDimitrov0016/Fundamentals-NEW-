function charsInRange(char1, char2) {
    let resultString = '';
    let startingChar = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let endingChar = Math.max(char1.charCodeAt(), char2.charCodeAt());
    for (let i = startingChar + 1; i < endingChar; i++) {
        if (i < endingChar - 1) {
            resultString += `${String.fromCharCode(i)} `;
        } else {
            resultString += String.fromCharCode(i);
        }
    }
    console.log(resultString);
}
charsInRange('#', ':');