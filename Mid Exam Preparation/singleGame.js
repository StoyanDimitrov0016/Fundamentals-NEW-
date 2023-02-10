function dungeon(input) {
    let rooms = input.split("|");
    let currentHealth = 100;
    let bitcoins = 0;
    let isTheHeroMadeIt = true;
    let roomsCount = 0;

    for (const room of rooms) {
        roomsCount++;
        let [action, value] = room.split(' ');
        value = Number(value);

        switch (action) {
            case 'potion':
                if (value > 100 - currentHealth) {
                    value = 100 - currentHealth;
                }
                console.log(`You healed for ${value} hp.`);
                currentHealth += value;
                console.log(`Current health: ${currentHealth} hp.`);
                break;

            case 'chest':
                console.log(`You found ${value} bitcoins.`);
                bitcoins += value
                break;

            default:
                let monster = action;
                let damage = value;
                currentHealth -= damage;
                if (currentHealth > 0) {
                    console.log(`You slayed ${monster}.`);
                } else {
                    isTheHeroMadeIt = false;
                    console.log(`You died! Killed by ${monster}.`);
                    console.log(`Best room: ${roomsCount}`);
                }
                break;
        }
        if (!isTheHeroMadeIt) {
            break;
        }
    }

    if (isTheHeroMadeIt) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${currentHealth}`);
    }
}
dungeon("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
dungeon("cat 10|potion 10|orc 10|chest 10|snake 25|chest 110");