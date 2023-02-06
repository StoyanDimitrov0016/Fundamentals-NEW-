function addAndSubtract(array) {
    let sumOriginalArray = 0;
    for (const element of array) {
        sumOriginalArray += element;
    }
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        if (currentElement % 2 == 0) {
            currentElement += i;
        } else {
            currentElement -= i;
        }
        newArray.push(currentElement);
    }
    let sumNewArray = 0;
    for (const element of newArray) {
        sumNewArray += element;
    }
    console.log(newArray);
    console.log(sumOriginalArray);
    console.log(sumNewArray);
}
addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);