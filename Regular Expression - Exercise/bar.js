function calculateTheBarRevenue(input) {
    let revenue = 0;
    const pattern = /%(?<name>[A-Z][a-z]+)%.*?<(?<item>\w+)>.*?\|(?<count>\d+)\|.*?(?<price>\d+(?:\.\d+)?)\$/;

    while (input[0] != 'end of shift') {
        const currentLine = input.shift();
        const match = pattern.exec(currentLine);
        if (match) {
            const name = match.groups.name;
            const item = match.groups.item;
            const quantity = match.groups.count;
            const price = match.groups.price;
            const customerTotalSpend = quantity * price;
            revenue += customerTotalSpend;
            console.log(`${name}: ${item} - ${customerTotalSpend.toFixed(2)}`);
        }
    }
    console.log('Total income:', revenue.toFixed(2));
}
// calculateTheBarRevenue([
//     "%George%<Croissant>|2|10.3$",
//     "%Peter%<Gum>|1|1.3$",
//     "%Maria%<Cola>|1|2.4$",
//     "end of shift"]);
calculateTheBarRevenue([
    "%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift"]);