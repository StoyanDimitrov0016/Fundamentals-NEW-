function mergeArrays(array1, array2) {
    let resultArray = [];
    for (let i = 0; i < array1.length; i++) {
        if (i % 2 == 0) {
            resultArray.push(Number(array1[i]) + Number(array2[i]));
        } else {
            resultArray.push(array1[i] + array2[i])
        }
    }
    console.log(resultArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'])