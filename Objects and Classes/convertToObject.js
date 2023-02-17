function conversionFromJSONtoObj(inputInJSON) {

    for (const key of Object.keys(JSON.parse(inputInJSON))) {

        console.log(`${key}: ${JSON.parse(inputInJSON)[key]}`);
        
    }
}
conversionFromJSONtoObj('{"name": "George", "age": 40, "town": "Sofia"}');