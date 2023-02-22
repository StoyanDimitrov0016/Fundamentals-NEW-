function cardGame(rounds) {
    let players = {};

    rounds.forEach(round => {

        let [player, drawnCards] = round.split(': ');
        drawnCards = drawnCards.split(', ');
        let cards = new Set;
        drawnCards.forEach(card => { cards.add(card); });

        if (players[player]) {
            cards.forEach(card => { players[player].add(card) });
        } else {
            players[player] = cards;
        }
    });
    for (const playerName in players) {
        let allPickedCards = Array.from(players[playerName].values());
        let playerPoints = 0;
        
        allPickedCards.forEach(card => { playerPoints += cardValueConvertor(card); });
        players[playerName] = playerPoints;
    };
    let playersArr = Object.entries(players)
    playersArr.forEach(player => {
        console.log(`${player[0]}: ${player[1]}`);
    });
}

function cardValueConvertor(cardInString) {
    const cardValues = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    }
    const cardSuits = {
        'C': 1,
        'D': 2,
        'H': 3,
        'S': 4,
    }
    cardInString = cardInString.split('');
    let suit = cardInString.pop();
    let value = cardInString.join("");
    return cardValues[value] * cardSuits[suit];
}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);