function minering(resouresList) {
    let resources = {};
    for (let i = 0; i < resouresList.length; i += 2) {
        if (resources.hasOwnProperty(resouresList[i])) {
            resources[resouresList[i]] += Number(resouresList[i + 1]);
        } else {
            resources[resouresList[i]] = Number(resouresList[i + 1]);
        }
    }
    for (const [resource, quantity] of Object.entries(resources)) {
        console.log(`${resource} -> ${quantity}`);
    }
}
minering(['gold', '155', 'silver', '10', 'copper', '17', 'gold', '15']);