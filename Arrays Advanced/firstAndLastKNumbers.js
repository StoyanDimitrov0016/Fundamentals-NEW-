function firstAndLastKNumbers(numbers) {
    let k = numbers.shift();
    let firstSequence = numbers.slice(0, k);
    let lastSequence = numbers.slice(-k);
    console.log(firstSequence.join(' '));
    console.log(lastSequence.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
