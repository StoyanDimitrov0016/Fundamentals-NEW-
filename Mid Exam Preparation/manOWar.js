function manOWar(input) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealthCapacity = Number(input.shift());
    let warShipSinks = false;
    let pirateShipSinks = false;

    let commands = input.slice();

    for (const command of commands) {
        let [action, value1, value2, value3] = command.split(' ');
        value1 = Number(value1);
        value2 = Number(value2);
        value3 = Number(value3);

        if (command === 'Retire') {
            break;
        }

        switch (action) {
            case 'Fire':

                if (value1 >= 0 && value1 < warShip.length) {
                    warShip[value1] -= value2;

                    if (warShip[value1] <= 0) {
                        warShipSinks = true;
                        console.log(`You won! The enemy ship has sunken.`);
                        break;
                    }
                }
                break;
            case 'Defend':
                if ((value1 >= 0 && value2 >= 0) && (value1 < pirateShip.length && value2 < pirateShip.length)) {
                    for (let i = value1; i <= value2; i++) {
                        pirateShip[i] -= value3;
                        if (pirateShip[i] <= 0) {
                            pirateShipSinks = true;
                            console.log(`You lost! The pirate ship has sunken.`);
                            break;
                        }
                    }
                }
                break;
            case 'Repair':
                if (value1 >= 0 && value1 < pirateShip.length) {
                    pirateShip[value1] += value2;
                    if (pirateShip[value1] > maxHealthCapacity) {
                        pirateShip[value1] = maxHealthCapacity;
                    }
                }
                break;
            case 'Status':
                let sectionsThatNeedRepair = pirateShip.filter((n) => n < maxHealthCapacity * 0.2);
                console.log(`${sectionsThatNeedRepair.length} sections need repair`);
                break;
        }
        if (warShipSinks || pirateShipSinks) {
            break;
        }
    }
    if (!warShipSinks && !pirateShipSinks) {
        console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b, 0)}`);
        console.log(`Warship status: ${warShip.reduce((a, b) => a + b, 0)}`);

    }
}
// manOWar((["12>13>11>20>66",
//     "12>22>33>44>55>32>18",
//     "70",
//     "Fire 2 11",
//     "Fire 8 100",
//     "Defend 3 6 11",
//     "Defend 0 3 5",
//     "Repair 1 33",
//     "Status",
//     "Retire"]));
manOWar((["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"]))