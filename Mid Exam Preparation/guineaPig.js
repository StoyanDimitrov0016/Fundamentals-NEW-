function piggy(input) {
    let food = +input[0];
    let hay = +input[1];
    let cover = +input[2];
    let pigWeight = +input[3];
    runOutOfStuff = false
    for (let i = 1; i < 31; i++) {
        food -= 0.3;
        if (i % 2 == 0) {
            hay -= food * 0.05;
        }
        if (i % 3 == 0) {
            cover -= pigWeight * (1 / 3);
        }
        if (food < 0 || hay < 0 || cover < 0) {
            runOutOfStuff = true;
            break
        }
    }
    if (runOutOfStuff) {
        console.log("Merry must go to the pet store!");
    } else {
        console.log(`Everything is fine! Puppy is happy! Food: ${food.toFixed(2)}, Hay: ${hay.toFixed(2)}, Cover: ${cover.toFixed(2)}.`);
    }
}
piggy(["1", "1.5", "1", "1.5"]);
