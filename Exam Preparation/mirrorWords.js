function mirrorWords(input) {
    const pattern = /(@|#)([A-Za-z]{3,})\1\1([A-Za-z]{3,})\1/g;
    const validPairs = [];
    const mirrorPairs = [];
    let match;

    while ((match = pattern.exec(input)) !== null) {
        const firstWord = match[2];
        const secondWord = match[3];

        validPairs.push(`${firstWord} <=> ${secondWord}`);
        if (firstWord === secondWord.split("").reverse().join("")) {
            mirrorPairs.push(`${firstWord} <=> ${secondWord}`);
        }
    }

    if (validPairs.length === 0) {
        console.log("No word pairs found!");
    } else {
        console.log(`${validPairs.length} word pairs found!`);
    }

    if (mirrorPairs.length === 0) {
        console.log("No mirror words!");
    } else {
        console.log("The mirror words are:");
        console.log(mirrorPairs.join(", "));
    }
}
mirrorWords("#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@");

//#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX# No words pairs and no mirror words