function censoringParticularWord(sentence, wordForCensoring) {
    // replaceAll don't work in Judge
    while (sentence.includes(wordForCensoring)) {
        sentence = sentence.replace(wordForCensoring, '*'.repeat(wordForCensoring.length))
    }
    console.log(sentence)
}
censoringParticularWord('A small sentence with some words', 'small');