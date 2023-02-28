function hashTags(text) {
    text = text.split(' ');
    const usedHashTags = new Set();

    text.forEach(word => {
        const isWordValid = word[0] == '#' && word.length > 1;

        if (isWordValid) {
            let isAllLetters = true;

            for (let i = 1; i < word.length; i++) {
                const char = word[i].toLowerCase();

                if (char.charCodeAt() < 97 || char.charCodeAt() > 122) {
                    isAllLetters = false;
                    break;
                }
            }
            if (isAllLetters) {
                const currentHashTag = word.substring(1, word.length);
                usedHashTags.add(currentHashTag);
            }
        }
    });
    usedHashTags.forEach(hashTag => { console.log(hashTag); });
}
hashTags()