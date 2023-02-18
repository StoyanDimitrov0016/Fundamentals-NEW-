function shoppingList(input) {
    let items = input.shift().split('!');
    let command = input.shift();
    while (command != "Go Shopping!") {
        let [action, item1, item2] = command.split(' ');
        switch (action) {
            case 'Urgent':
                if (!items.includes(item1)) {
                    items.unshift(item1);
                }
                break;
            case 'Unnecessary':
                if (items.includes(item1)) {
                    items.splice(items.indexOf(item1), 1);
                }
                break;
            case 'Correct':
                if (items.includes(item1)) {
                    items[items.indexOf(item1)] = item2;
                }
                break;
            case 'Rearrange':
                if (items.includes(item1)) {
                    let removedItem = items.splice(items.indexOf(item1), 1)
                    items.push(removedItem);
                }
                break;

        }
        command = input.shift();
    }
    console.log(items.join(' '));
}
shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"]);