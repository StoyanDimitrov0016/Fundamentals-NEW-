function calculateTheTax(input) {
    let cars = input[0].split('>>');
    let nationalRevenue = 0;
    for (const car of cars) {
        let [type, years, kilometers] = car.split(' ');
        years = Number(years);
        kilometers = Number(kilometers);
        let initialTax = 0;
        let taxDecline = 0;
        let taxIncrease = 0;
        let totalTax = 0;
        switch (type) {
            case 'family':
                initialTax = 50;
                taxDecline = 5;
                taxIncrease = 12;
                totalTax = initialTax - years * taxDecline + Math.floor(kilometers / 3000) * taxIncrease;
                nationalRevenue += totalTax
                console.log(`A ${type} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
                break;
            case 'heavyDuty':
                initialTax = 80;
                taxDecline = 8;
                taxIncrease = 14;
                totalTax = initialTax - years * taxDecline + Math.floor(kilometers / 9000) * taxIncrease;
                nationalRevenue += totalTax
                console.log(`A ${type} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
                break;
            case 'sports':
                initialTax = 100;
                taxDecline = 9;
                taxIncrease = 18;
                totalTax = initialTax - years * taxDecline + Math.floor(kilometers / 2000) * taxIncrease;
                nationalRevenue += totalTax;
                console.log(`A ${type} car will pay ${totalTax.toFixed(2)} euros in taxes.`);
                break;

            default:
                console.log('Invalid car type.');
                break;
        }
    }
    console.log(`The National Revenue Agency will collect ${nationalRevenue.toFixed(2)} euros in taxes.`);
}
calculateTheTax(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);