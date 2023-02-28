function revealingWords(words, sentence) {
    words = words.split(', ');
    words.forEach(word => {
        const match = `${'*'.repeat(word.length)}`;
        sentence = sentence.replace(match, word);
    });
    console.log(sentence);
}
revealingWords('great, learning', 'softuni is ***** place for ******** new programming languages')