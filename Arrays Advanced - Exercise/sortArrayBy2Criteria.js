function sortingBy2Criteria(array) {
    let sorted = array.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join('\n'));
}
sortingBy2Criteria(['alpha', 'beta', 'gamma']);
sortingBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);