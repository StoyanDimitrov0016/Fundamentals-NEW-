
function orders(product, quantity) {
    let productPrice = 0;
    switch (product) {
        case "coffee":
            productPrice = 1.5;
            break;
        case "coke":
            productPrice = 1;
            break;
        case "water":
            productPrice = 1.4;
            break;
        case "snacks":
            productPrice = 2;
            break;
    }
    console.log((productPrice * quantity).toFixed(2));
}
orders("water", 5);