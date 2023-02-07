function palindromeOrNot(input) {
    for (let i = 0; i < input.length; i++) {
        let currentNumber = input[i];
        let palindrome = '';
        for (let j = currentNumber.toString().length - 1; j >= 0; j--) {
            palindrome += currentNumber.toString()[j];
        }
        if (currentNumber == palindrome) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeOrNot([123,323,421,121]);
console.log('------------------------');
palindromeOrNot([32,2,232,1010]);
