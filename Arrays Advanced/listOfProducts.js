// function listOfProducts(products) {
//     let list = [];
//     let listIndexes = [];
//     for (let i = 1; i <= products.length; i++) {
//         listIndexes.push(`${i}.`);
//     }
//     let sortedProducts = products.sort((a, b) => a.localeCompare(b));
//     for (let i = 0; i < sortedProducts.length; i++) {
//         list.push(listIndexes[i] + sortedProducts[i]);
//     }
//     console.log(list.join("\n"));
// }
// listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);
function listOfProducts(products) {
    let sortedProducts = products.sort();
    for (let i = 0; i < sortedProducts.length; i++) {
        console.log(`${i + 1}.${sortedProducts[i]}`);
    }
}
listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);