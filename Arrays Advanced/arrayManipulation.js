function arrayManipulation(array) {
    let numbers = array.shift().split(' ').map(Number);
    let result = numbers.slice();
    for (const command of array) {
        let [action, value1, value2] = command.split(' ');
        value1 = Number(value1);
        value2 = Number(value2);
        switch (action) {
            case 'Add':
                result.push(value1);
                break;
            case 'Remove':
                result = result.filter(element => element != value1);
                break;
            case 'RemoveAt':
                result.splice(value1, 1)
                break;
            case 'Insert':
                result.splice(value2, 0, value1)
                break;
        }
    }
    console.log(result.join(' '));
}
arrayManipulation(['6 12 2 65 6 42', 'Add 8', 'Remove 12', 'RemoveAt 3', 'Insert 6 2'])