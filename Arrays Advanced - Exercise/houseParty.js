function houseParty(array) {
    let partyList = [];
    for (const command of array) {
        let name = command.split(' ')[0];
        if (command.includes('is going!')) {
            if (partyList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                partyList.push(name);
            }
        } else {
            if (partyList.includes(name)) {
                partyList.splice(partyList.indexOf(name), 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(partyList.join('\n'));
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);