function newLevel(input) {
    let neededXp = input.shift();
    let battlesCount = input.shift();
    let actualXpSum = 0;
    let actualBattlesCount = 0;
    for (let i = 0; i < battlesCount; i++) {
        actualBattlesCount++;
        let currentBattleXp = input[i];
        if (actualBattlesCount % 3 == 0) {
            currentBattleXp *= 1.15;
        }
        if (actualBattlesCount % 5 == 0) {
            currentBattleXp *= 0.9
        }
        if (actualBattlesCount % 15 == 0) {
            currentBattleXp *= 1.05;
        }
        actualXpSum += currentBattleXp;
        if (actualXpSum >= neededXp) {
            break;
        }
    }
    if (actualXpSum >= neededXp) {
        console.log(`Player successfully collected his needed experience for ${actualBattlesCount} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${(neededXp - actualXpSum).toFixed(2)} more needed.`);
    }
}
newLevel([500,
    5,
    50,
    100,
    200,
    100,
    20])