function citiesGeographicalLocation(citiesList) {
    for (const city of citiesList) {
        let [cityName, latitude, longitude] = city.split(" | ");
        let townInfo = {
            town: cityName,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        console.log(townInfo);
    }
}
citiesGeographicalLocation([
    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'])