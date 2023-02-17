function cityInfo(city) {
    for (const key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }
}
// function cityInfo(city) {
//     for (const pair of Object.entries(city)) {
//         console.log(`${pair[0]} -> ${pair[1]}`);
//     }
// }
cityInfo({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})