function maxNumber(array) {
    let resultArray = [];
    for (let i = 0; i < array.length; i++) {
        let isCurrentNumberMax = true;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] <= array[j]) {
                isCurrentNumberMax = false;
                break;
            }
        }
        if (isCurrentNumberMax) {
            resultArray.push(array[i]);
        }
    }
    console.log(resultArray.join(' '));
}
maxNumber([27, 19, 42, 2, 13, 45, 48]);