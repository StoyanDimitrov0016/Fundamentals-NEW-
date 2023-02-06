function condenseArrayToNumber(array) {
    if (array.length == 1) {
        console.log(array[0]);
    } else {
        while (array.length > 1) {
            let buff = [];
            for (let i = 0; i < array.length - 1; i++) {
                buff.push(array[i + 1] + array[i]);
            }
            array = buff;
        }
        console.log(array.join(''));
    }



}
//condenseArrayToNumber([2, 10, 3]);
condenseArrayToNumber([5, 0, 4, 1, 2]);