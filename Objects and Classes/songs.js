function creatingSongClass(input) {
    let songsCount = input.shift();

    class Song {
        constructor(typeList, name, duration) {
            this.typeList = typeList
            this.name = name
            this.duration = duration
        }
    }

    let result = [];

    for (let i = 0; i < songsCount; i++) {
        let [typeList, name, duration] = input[i].split('_');
        result.push(new Song(typeList, name, duration));
    }

    let wantedTypeList = input.pop();

    if (wantedTypeList == 'all') {
        result.forEach((i) => console.log(i.name));
    } else {
        let filtered = result.filter((i) => i.typeList === wantedTypeList)
        filtered.forEach(element => {
            console.log(element.name);
        });
    }
}
creatingSongClass([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])