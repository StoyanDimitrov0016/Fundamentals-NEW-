function searchInArr(numbers, referenceArr) {
    let arrLength = referenceArr[0];
    let deleteCount = referenceArr[1];
    let referenceNumber = referenceArr[2]
    let array = numbers.slice(0, arrLength);
    array.splice(0, deleteCount);
    let referenceMatches = array.filter(number => number == referenceNumber);
    console.log(`Number ${referenceNumber} occurs ${referenceMatches.length} times.`);
}
searchInArr([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchInArr([7, 1, 5, 8, 2, 7], [3, 1, 5]);