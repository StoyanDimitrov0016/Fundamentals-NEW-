function randomGeneratedSentence() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let names = ['Peter', 'Michell', 'Jane', 'Steve'];
    let places = ['Sofia', 'Plovdiv', 'Varna', 'Burgas'];
    let verbs = ['eats', 'holds', 'sees', 'plays with', 'brings'];
    let nouns = ['stones', 'cake', 'apple', 'laptop', 'bikes'];
    let adverbs = ['slowly', 'diligently', 'warmly', 'sadly', 'rapidly'];
    let details = ['near the river', 'at home', 'in the park'];

    function getRandomWord(array) {
        let word = array[Math.floor(Math.random() * array.length)];
        return word;
    }

    let recursiveAsyncReadLine = function () {
        let randomName = getRandomWord(names);
        let randomPlace = getRandomWord(places);
        let randomVerb = getRandomWord(verbs);
        let randomNoun = getRandomWord(nouns);
        let randomAdverb = getRandomWord(adverbs);
        let randomDetail = getRandomWord(details);

        let who = `${randomName} from ${randomPlace}`;
        let action = `${randomAdverb} ${randomVerb} ${randomNoun}`;
        let sentence = `${who} ${action} ${randomDetail}`;

        console.log('Hello, this is my first random-generated sentence:');
        console.log(sentence);

        rl.question(`Click [Enter] to generate a new one.`, string => {
            recursiveAsyncReadLine();
        });
    };

    recursiveAsyncReadLine();
}

randomGeneratedSentence();
