function creatingCatClass(input) {
    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    let result = [];

    for (const element of input) {
        let [catName, age] = element.split(' ');
        result.push(new Cat(catName, age))
    }

    result.forEach(catObject => {
        catObject.meow();
    });
}
creatingCatClass(['Mellow 2', 'Tom 5'])