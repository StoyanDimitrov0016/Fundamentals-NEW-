function arrayManipulator(numbers, commands) {
    let command = commands.shift();
    while (command != 'print') {
        let elements = command.split(' ');
        let action = elements.shift();
        let values = elements.map(Number);

        switch (action) {
            case 'add':
                let [index, element] = values;
                numbers.splice(index, 0, element);
                break;
            case 'addMany':
                let indexAddMany = values.shift();
                numbers.splice(indexAddMany, 0, ...values);
                break;
            case 'contains':
                if (numbers.indexOf(values[0] >= 0)) {
                    console.log(numbers.indexOf(values[0]));
                } else {
                    console.log('-1');
                }
                break;
            case 'remove':
                numbers.splice(values[0], 1);
                break;
            case 'shift':
                for (let i = 0; i < values[0]; i++) {
                    let num = numbers.shift();
                    numbers.push(num);
                }
                break;
            case 'sumPairs':
                let numbersCopy = numbers.slice();
                numbers.length = 0;
                for (let i = 0; i < numbersCopy.length; i += 2) {
                    if (i + 1 >= numbersCopy.length) {
                        numbers.push(numbersCopy[i]);
                    } else {
                        numbers.push(numbersCopy[i] + numbersCopy[i + 1]);
                    }
                }
                break;
        }
        command = commands.shift();
    }
    //The program checking is my code is valid don't approve console.log(numbers) and I had to do it manually
    // let output = '';
    // for (let i = 0; i < numbers.length; i++) {
    //     if (i < numbers.length - 1) {
    //         output += `${numbers[i]}, `
    //     } else {
    //         output += `${numbers[i]}`
    //     }
    // }
    //console.log(`[ ${output} ]`);
    console.log("[", numbers.join(', '), "]");
}
arrayManipulator([1, 2],
    ["add 1 2",
        "sumPairs",
        "print"])
