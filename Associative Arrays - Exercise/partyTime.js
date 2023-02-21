function creatingPartyList(list) {
    let reservations = {};
    let member = list.shift();

    while (member != 'PARTY') {

        if (isNaN(Number(member[0]))) {
            reservations[member] = 'Regular';
        } else {
            reservations[member] = 'VIP';
        }
        member = list.shift();
    }

    let guests = list.slice();

    guests.forEach(guest => {
        if (reservations[guest]) { delete reservations[guest]; }
    });

    let regularGuestsNotComing = [];
    let vipGuestsNotComing = [];

    let guestsNotCome = Object.entries(reservations);

    guestsNotCome.forEach(guest => {
        if (guest[1] == 'VIP') {
            vipGuestsNotComing.push(guest[0]);
        } else {
            regularGuestsNotComing.push(guest[0]);
        }
    });
    console.log(regularGuestsNotComing.length + vipGuestsNotComing.length);
    vipGuestsNotComing.forEach(guest => { console.log(guest); });
    regularGuestsNotComing.forEach(guest => { console.log(guest) });
}
creatingPartyList(['m8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    'PARTY',
    '7ugX7bm0']);