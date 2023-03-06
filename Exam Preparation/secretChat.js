function secretChat(input) {
    let initialLine = input.shift();
    while (input[0] != 'Reveal') {
        const command = input.shift()
        const [action, value1, value2] = command.split(':|:');
        switch (action) {
            case 'InsertSpace':
                const indexForSpace = Number(value1);
                initialLine = initialLine.split('');
                initialLine.splice(indexForSpace, 0, ' ');
                initialLine = initialLine.join('');
                console.log(initialLine);
                break;
            case 'Reverse':
                if (initialLine.includes(value1)) {
                    let takenPart = initialLine.split('')
                        .splice(initialLine.indexOf(value1), value1.length)
                        .reverse()
                        .join('');
                    initialLine = initialLine.replace(value1, '');
                    initialLine = initialLine.concat(takenPart);
                    console.log(initialLine);
                } else {
                    console.log('error');
                }
                break;
            case 'ChangeAll':
                const stringForReplacement = value1;
                const replacementString = value2;
                while (initialLine.includes(stringForReplacement)) {
                    initialLine = initialLine.replace(stringForReplacement, replacementString);
                }
                console.log(initialLine);
                break;
        }
    }
    console.log('You have a new text message:', initialLine);
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);