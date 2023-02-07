function loadingBar(percentage) {
    let bar = '';
    if (percentage > 0 && percentage < 100) {
        for (let i = 0; i < percentage; i += 10) {
            bar += '%';
        }
        for (let i = percentage; i < 100; i += 10) {
            bar += '.';
        }
        console.log(`${percentage}% [${bar}]`);
        console.log('Still loading...');
    } else {
        console.log(`${percentage}% Complete!`);
        console.log(`[%%%%%%%%%%]`);
    }
}
loadingBar(10);
loadingBar(20);
loadingBar(30);
loadingBar(40);
loadingBar(50);
loadingBar(60);
loadingBar(70);
loadingBar(80);
loadingBar(90);
loadingBar(100);