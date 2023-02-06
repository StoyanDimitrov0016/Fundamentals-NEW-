function equalSum(array) {
    let equalSumOnBothSides = false;
    let equilibriumIndex = 0;
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (let l = i - 1; l >= 0; l--) {
            leftSum += array[l];
        }
        for (let r = i + 1; r < array.length; r++) {
            rightSum += array[r];
        }
        if (leftSum == rightSum) {
            equalSumOnBothSides = true;
            equilibriumIndex = i;
            break;
        }
    }
    if (equalSumOnBothSides) {
        console.log(equilibriumIndex);
    } else {
        console.log('no');
    }
}
equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
