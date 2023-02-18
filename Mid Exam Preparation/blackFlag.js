function blackFlag(input) {
    days = Number(input.shift());
    plunderPerDay = Number(input.shift());
    expectedPlunder = Number(input.shift());
    let sumPlunder = 0;
    for (let i = 1; i <= days; i++) {
        sumPlunder += plunderPerDay;
        if (i % 3 == 0) {
            sumPlunder += 0.5 * plunderPerDay;
        }
        if (i % 5 == 0) {
            sumPlunder *= 0.7;
        }
    }
    if (sumPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${sumPlunder.toFixed(2)} plunder gained.`);
    } else {
        console.log(`Collected only ${(sumPlunder / expectedPlunder * 100).toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["10", "20", "380"]);