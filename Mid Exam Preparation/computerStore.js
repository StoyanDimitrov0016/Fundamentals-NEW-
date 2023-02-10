function computerStore(input) {
    let customerSum = 0;
    let command = input.shift();

    while (command !== 'special' && command !== 'regular') {
        let currentPartPrice = Number(command);
        if (currentPartPrice > 0) {
            customerSum += currentPartPrice;
            ;
        } else {
            console.log('invalid price!');
        }
        command = input.shift()
    }
    if (customerSum <= 0) {
        console.log('Invalid order!');
    } else {
        if (command == 'special') {
            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${customerSum.toFixed(2)}$`);
            console.log(`Taxes: ${(customerSum * 0.2).toFixed(2)}$`);
            console.log(`-----------`);
            console.log(`Total price: ${(customerSum * 1.2 * 0.9).toFixed(2)}$"`);
        } else {
            console.log(`Congratulations you've just bought a new computer!`);
            console.log(`Price without taxes: ${customerSum.toFixed(2)}$`);
            console.log(`Taxes: ${(customerSum * 0.2).toFixed(2)} $`);
            console.log(`----------- `);
            console.log(`Total price: ${(customerSum * 1.2).toFixed(2)}$"`);
        }
    }
}
// computerStore(([
//     '1050',
//     '200',
//     '450',
//     '2',
//     '18.50',
//     '16.86',
//     'special'
// ]));
computerStore(['regular']);