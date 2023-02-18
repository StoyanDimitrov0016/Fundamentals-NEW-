function storeInventory(availableProducts, orderedProducts) {
    let store = {};
    for (let i = 0; i < availableProducts.length; i += 2) {
        store[availableProducts[i]] = Number(availableProducts[i + 1]);
    }
    let keys = Object.keys(store);
    for (let i = 0; i < orderedProducts.length; i += 2) {
        if (!keys.includes(orderedProducts[i])) {
            store[orderedProducts[i]] = 0;
        }
        store[orderedProducts[i]] += Number(orderedProducts[i + 1])
    }
    for (const pair of Object.entries(store)) {
        console.log(`${pair[0]} -> ${pair[1]}`);
    }
}
storeInventory(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas',
        '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ])
