function oddOccurrences(input) {
    let sentence = input.split(' ').map(el => el.toLowerCase())
    let wordsInfo = {};
    for (const word of sentence) {
        let occurrences = 0;
        for (const element of sentence) {
            if (element === word) {
                occurrences++;
            }
        }
        wordsInfo[word] = occurrences;
    }
    let oddOccurrenceWords = Object.entries(wordsInfo).filter(a => a[1] % 2 != 0);
    let output = [];
    for (const kvp of oddOccurrenceWords) {
        output.push(kvp[0]);
    }
    console.log(output.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');