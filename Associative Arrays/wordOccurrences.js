function wordOccurrences(words) {
    let wordsInfo = {};
    for (const word of words) {
        if (wordsInfo[word]) {
            wordsInfo[word]++;
        }
        else {
            wordsInfo[word] = 1;
        }
    }
    let sortedByCountWords = Object.entries(wordsInfo).sort((a, b) => b[1] - a[1]);
    for (const [word, occurrences] of sortedByCountWords) {
        console.log(word, '->', occurrences, 'times');
    }

}
wordOccurrences(["Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence", "And",
    "finally", "the", "third", "sentence"])