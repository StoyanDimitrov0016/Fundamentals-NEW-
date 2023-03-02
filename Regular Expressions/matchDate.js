function findValidDates(datesList) {
    const pattern = /(?<days>\d{2})(?<separator>[\.\-/])(?<month>[A-Z][a-z]{2})\2(?<years>\d{4})/g
    let match = pattern.exec(datesList);
    while (match) {
        const day = match.groups.days;
        const month = match.groups.month;
        const year = match.groups.years;
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
        match = pattern.exec(datesList);
    }
}
findValidDates("13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016");