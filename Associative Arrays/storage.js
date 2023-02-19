function storage(productList) {
    let warehouse = new Map;
    for (const line of productList) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);
        if (warehouse.has(product)) {
            quantity += warehouse.get(product);
        }
        warehouse.set(product, quantity);
    }
    for (const [product, quantity] of warehouse) {
        console.log(product, '->', quantity);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);