function distinctArrays(numbers) {
    let result = numbers.slice();
    for (let i = 0; i < result.length; i++) {
        let currentElement = result[i];
        for (let j = i + 1; j < result.length; j++) {
            if (currentElement === result[j]) {
                result[j] = undefined;
            }
        }
    }
    let uniqueNumsArr = result.filter(num => typeof num != "undefined");
    console.log(uniqueNumsArr.join(' '));
}
distinctArrays([7, 8, 9, 7, 2, 3, 4, 1, 2]);