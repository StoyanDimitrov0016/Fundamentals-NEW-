function sortingArray(numbers) {
    let sortedAscendingNumsArr = numbers.sort((a, b) => b - a);
    let sortedArrLength = sortedAscendingNumsArr.length;
    let result = [];
    for (let i = 0; i < sortedArrLength; i++) {
        let biggestNum = sortedAscendingNumsArr.shift();
        let smallestNum = sortedAscendingNumsArr.pop();
        result.push(biggestNum);
        result.push(smallestNum);
    }
    console.log(result.join(' '));
}
sortingArray([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);