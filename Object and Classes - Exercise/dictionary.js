function creatingDictionary(input) {

    let dictionaryObj = {};

    input.forEach(line => {
        line = JSON.parse(line);
        let term = Object.keys(line).join('');
        let definition = Object.values(line).join('');

        dictionaryObj[term] = definition

    });

    let alphabeticallySortedDictionary = Object.entries(dictionaryObj).sort((a, b) => a[0].localeCompare(b[0]));
    alphabeticallySortedDictionary.forEach(word => {
        console.log(`Term: ${word[0]} => Definition: ${word[1]}`);
    });
}
creatingDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds(coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
    '{"Microphone":"Small noise"}'
])