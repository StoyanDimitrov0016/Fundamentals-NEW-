function equalArrays(array1, array2) {
    let sum = 0;
    let areArraysIdentical = true;
    let indexOfDifference = 0;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] == array2[i]) {
            sum += Number(array1[i]);
        } else {
            areArraysIdentical = false;
            indexOfDifference = i;
            break;
        }
    }
    if (areArraysIdentical) {
        console.log('Arrays are identical. Sum:', sum);
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexOfDifference} index`);
    }


}
equalArrays(['10', '20', '30'], ['10', '20', '30']);