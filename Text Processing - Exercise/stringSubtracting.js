function searchingForaMatch(word, text) {
    const lowerCaseWord = word.toLowerCase();
    const lowerCaseText = text.toLowerCase();
    if (lowerCaseText.includes(lowerCaseWord)) {
        console.log(word);
    } else {
        console.log(`${word} not found`);
    }
}
searchingForaMatch('javascript', 'JavaScript is the best programming language');
