function oddIndexNum(numbers) {
    let oddIndexNumsArr = numbers.filter((x, i) => i % 2 == 1);
    let result = oddIndexNumsArr.map(num => num * 2).reverse();
    console.log(result.join(' '));
}
oddIndexNum([10, 15, 20, 25]);
oddIndexNum([3, 0, 10, 4, 7, 3]);