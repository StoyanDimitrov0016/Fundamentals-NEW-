function piratesAttack(input) {
    const towns = {};

    const actions = {
        'Plunder': plunder,
        'Prosper': prosper
    };

    while (input[0] != 'Sail') {
        const line = input.shift();
        let [city, population, gold] = line.split('||');
        population = Number(population);
        gold = Number(gold);

        if (towns.hasOwnProperty(city)) {
            towns[city].population += population;
            towns[city].gold += gold;
        } else {
            towns[city] = { 'population': population, 'gold': gold };
        }
    }

    input.shift();

    while (input[0] != 'End') {
        let [action, city, ...values] = input.shift().split('=>');
        values = values.map(Number);
        actions[action](city, ...values);
    }

    const remainingCities = Object.entries(towns);

    if (remainingCities.length > 0) {
        console.log(`Ahoy, Captain! There are ${remainingCities.length} wealthy settlements to go to:`);
        for (let i = 0; i < remainingCities.length; i++) {
            //console.log(remainingCities[i][1]);
            console.log(`${remainingCities[i][0]} -> Population: ${remainingCities[i][1]['population']} citizens, Gold: ${remainingCities[i][1].gold} kg`);
        }
    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }
    function plunder(town, people, gold) {
        towns[town].population -= people;
        towns[town].gold -= gold;

        if (towns[town].population <= 0 || towns[town].gold <= 0) {
            delete towns[town];

            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            console.log(`${town} has been wiped off the map!`);
            return;
        }
        console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
    }

    function prosper(town, gold) {
        if (gold < 0) {
            return console.log('Gold added cannot be a negative number!');
        }
        towns[town].gold += gold;
        console.log(`${gold} gold added to the city treasury. ${town} now has ${towns[town].gold} gold.`)
    }
}
pirates([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End']);