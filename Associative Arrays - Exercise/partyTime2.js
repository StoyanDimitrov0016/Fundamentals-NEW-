function creatingPartyList(input) {
    let vips = [];
    let regulars = [];
    let person = input.shift();
    while (person != 'PARTY') {
        if (isNaN(Number(person[0]))) {
            regulars.push(person);
        } else {
            vips.push(person);
        }
        person = input.shift();
    }
    for (const comingGuest of input) {
        if (vips.includes(comingGuest)) {
            vips.splice(vips.indexOf(comingGuest), 1);
        }
        if (regulars.includes(comingGuest)) {
            regulars.splice(regulars.indexOf(comingGuest), 1);
        }
    }
    console.log(vips.concat(regulars).length);
    vips.concat(regulars).forEach(guest => {
        console.log(guest);
    });
}
creatingPartyList(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'])