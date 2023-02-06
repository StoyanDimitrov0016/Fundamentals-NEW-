function commonElements(array1, array2) {
    let commonEl = [];
    for (let i = 0; i < array1.length; i++) {
        for (const element of array2) {
            if (element === array1[i]) {
                commonEl.push(array1[i]);
            }
        }
    }
    for (const element of commonEl) {
        console.log(element);
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])