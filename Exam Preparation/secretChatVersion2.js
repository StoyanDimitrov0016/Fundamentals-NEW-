function secretChat(input) {
    let initialLine = input.shift();

    const actions = {
        'InsertSpace': insertSpace,
        'Reverse': reverse,
        'ChangeAll': changeAll
    };

    while (input[0] != 'Reveal') {
        const command = input.shift()
        const [action, value1, value2] = command.split(':|:');
        actions[action](value1, value2);
    }

    console.log('You have a new text message:', initialLine);

    function insertSpace(indexForSpace) {
        initialLine = initialLine.split('');
        initialLine.splice(indexForSpace, 0, ' ');
        initialLine = initialLine.join('');
        console.log(initialLine);
    }

    function reverse(substring) {
        if (initialLine.includes(substring)) {
            let takenPart = initialLine.split('')
                .splice(initialLine.indexOf(substring), substring.length)
                .reverse()
                .join('');
            initialLine = initialLine.replace(substring, '');
            initialLine = initialLine.concat(takenPart);
            console.log(initialLine);
        } else {
            console.log('error');
        }
    }

    function changeAll(substring, replacementString) {
        while (initialLine.includes(substring)) {
            initialLine = initialLine.replace(substring, replacementString);
        }
        
        console.log(initialLine);
    }
}
secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
])