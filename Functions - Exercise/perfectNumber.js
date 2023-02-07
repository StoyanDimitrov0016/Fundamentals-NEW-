function perfectNumber(number) {
    let resultArray = [];
    for (let i = 0; i < number; i++) {
        if (number % i == 0) {
            resultArray.push(i);
        }
    }
    if (number == resultArray.reduce((a, b) => a + b, 0)) {
        console.log('We have a perfect number!');
    } else {
        console.log(`It's not so perfect.`);
    }
}
perfectNumber(6);
perfectNumber(28);
perfectNumber(1236498);