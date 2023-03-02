function race(input) {
    const validParticipantsNames = input.shift().split(', ');
    const validParticipantsInfo = {};

    validParticipantsNames.forEach(participant => validParticipantsInfo[participant] = 0);

    const lettersPattern = /[A-Za-z]/g;
    const digitPattern = /\d/g;

    while (input[0] !== 'end of race') {

        const currentLine = input.shift();

        const playerName = [...currentLine.matchAll(lettersPattern)].join('');
        const playerDistance = [...currentLine.matchAll(digitPattern)]
            .map(Number)
            .reduce((a, b) => a + b, 0);

        if (validParticipantsInfo.hasOwnProperty(playerName)) {

            validParticipantsInfo[playerName] += playerDistance;
        }
    }

    const sortedDescending = Object.entries(validParticipantsInfo).sort((a, b) => b[1] - a[1]).slice(0, 3);

    const suffixes = {
        '1': 'st',
        '2': 'nd',
        '3': 'rd',
    }

    for (let i = 0; i < sortedDescending.length; i++) {
        console.log(`${i + 1}${suffixes[i + 1]}: ${sortedDescending[i][0]}`);
    }
}
race(["George, Peter, Bill, Tom",
    "G4e@55or%6g6!68e!!@",
    "R1@!3a$y4456@",
    "B5@i@#123ll",
    "G@e54o$r6ge#",
    "7P%et^#e5346r",
    "T$o553m&6",
    "end of race"])