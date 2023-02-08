function train(array) {
    let numbers = array.shift().split(' ').map(Number);
    let maxCapacity = Number(array.shift());
    let commands = array.slice();

    for (const command of commands) {
        /*A command can be "Add x" - creating an element at the end of the array with x value
        or just a number - add the number with an existing element where their sum
        isn't bigger than max capacity.*/
        let [element1, element2] = command.split(' ');

        if (element1 === 'Add') {
            numbers.push(Number(element2));
        } else {

            element1 = Number(element1);

            for (let i = 0; i < numbers.length; i++) {
                let currentNumber = numbers[i];

                if (currentNumber + element1 <= maxCapacity) {
                    numbers[i] = currentNumber + element1;
                    break;
                }
            }
        }
    }
    console.log(numbers.join(' '));
}
train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75']);