function theLargestFiveNumbers(input) {
    let numbers = input.split(" ").map(Number);
    let sumNumbers = 0;

    for (const number of numbers) {
        sumNumbers += number;
    }

    let average = sumNumbers / numbers.length;
    let biggerThanAverage = numbers.filter((num) => num > average).sort((a, b) => b - a);

    if (biggerThanAverage.length == 0) {
        console.log('No');
    } else {
        biggerThanAverage = biggerThanAverage.splice(0, 5);
    }
    console.log(biggerThanAverage.join(" "));
}
theLargestFiveNumbers('-1 -2 -3 -4 -5 -6')