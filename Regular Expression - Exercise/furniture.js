function calculateFurnitureCost(input) {
    const boughtItems = [];
    let totalSum = 0;
    const pattern = /^>>(?<item>.+)<<(?<price>\d+(?:\.\d+)?)!(?<quantity>\d+(?:\.\d+)?)$/;
    while (input[0] != 'Purchase') {
        const currentLine = input.shift();
        const match = pattern.exec(currentLine);
        if (match) {
            const itemName = match.groups.item;
            const itemPrice = match.groups.price;
            const itemQuantity = match.groups.quantity;
            boughtItems.push(itemName);
            totalSum += itemPrice * itemQuantity;
        }
    }
    console.log('Bought furniture:');
    if (boughtItems.length > 0) {
        boughtItems.forEach(item => { console.log(item) });
    }
    console.log('Total money spend:', totalSum.toFixed(2));
}
calculateFurnitureCost([
    ">>Sofa<<312.23!3.66",
    ">>Sofa<<312.23!3.66",
    ">>Sofa<<312.23!3.66",
    ">>Sofa<<312.23!3.66",
    ">>Sofa<<312.23!3.66",
    "Purchase"])