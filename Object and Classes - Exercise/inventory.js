function heroesInventory(input) {
    let heroes = [];
    input.forEach(line => {
        let [name, level, items] = line.split(' / ');
        heroes.push({ name, level, items });
    });
    let sortedByLvlHeroes = heroes.sort((a, b) => a.level - b.level);
    sortedByLvlHeroes.forEach(hero => {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    });
}
heroesInventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);