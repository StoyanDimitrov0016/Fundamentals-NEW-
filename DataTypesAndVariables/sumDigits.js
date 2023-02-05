function sumDigits(number) {
    let digitSum = 0;
    for (const digit of number.toString()) {
        digitSum += Number(digit);
    }
    console.log(digitSum);
}
sumDigits(245678);