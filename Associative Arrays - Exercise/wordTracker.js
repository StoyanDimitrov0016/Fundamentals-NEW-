function wordsTracker(input) {
    let searchedWords = input.shift().split(' ');
    let words = input.slice();
    let searchedWordsInfo = {};
    for (const searchedWord of searchedWords) {
        let occurrences = 0;
        for (const word of words) {
            if (word === searchedWord) {
                occurrences++;
            }
        }
        searchedWordsInfo[searchedWord] = occurrences;
    }
    let descendingSortedWordsByOccurrences = Object.entries(searchedWordsInfo).sort((a, b) => b[1] - a[1]);
    for (const kvp of descendingSortedWordsByOccurrences) {
        console.log(kvp[0], '-', kvp[1]);
    }
}
wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);