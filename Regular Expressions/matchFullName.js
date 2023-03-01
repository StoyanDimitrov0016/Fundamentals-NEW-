function findValidFullNames(nameList) {
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;
    const validNames = [];
    let match = pattern.exec(nameList)
    while (match != null) {
        validNames.push(match[0]);
        match = pattern.exec(nameList);
    }
    console.log(validNames.join(' '));
}
findValidFullNames("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan Ivanov")