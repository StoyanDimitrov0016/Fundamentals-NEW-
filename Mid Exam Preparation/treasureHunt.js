function treasureHunt(input) {
    let treasureChest = input.shift().split('|');
    let command = input.shift().split(' ');
    while (command[0] != 'Yohoho!') {
        let action = command.shift();

        switch (action) {
            case 'Loot':

                for (const loot of command) {
                    if (!treasureChest.includes(loot)) {
                        treasureChest.unshift(loot);
                    }
                }

                break;
            case 'Drop':

                let index = Number(command[0]);
                if (index >= 0 && index < treasureChest.length) {
                    let removedLoot = treasureChest.splice(index, 1)
                    treasureChest.push(removedLoot);
                }

                break;
            case 'Steal':

                let stolenItems = treasureChest.splice(-Number(command[0]));
                console.log(stolenItems.join(', '));

                break;
        }
        command = input.shift().split(' ');
    }

    let sumLength = 0;
    let lootCount = 0;

    for (const loot of treasureChest) {
        sumLength += loot.length;
        lootCount++;
    }

    let averageGain = sumLength / lootCount;

    if (averageGain > 0) {
        console.log(`Average treasure gain: ${averageGain.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}
treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"]);