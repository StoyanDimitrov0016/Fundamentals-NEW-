function lastKNumbersSequence(n, k) {
    let sequence = [1];
    for (let i = 1; i < n; i++) {
        let previousNumbersSum = sequence.slice(-k).reduce((a, b) => a + b, 0);
        sequence.push(previousNumbersSum);
    }
    console.log(sequence.join(' '));
}
lastKNumbersSequence(6, 3);
lastKNumbersSequence(8, 2);