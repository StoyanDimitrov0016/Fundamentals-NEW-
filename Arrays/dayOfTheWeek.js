function dayOfTheWeek(number) {
    let week = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ]
    if (number < 1 || number > 7) {
        console.log('Invalid day!');
    } else {
        console.log(week[number - 1]);
    }
}
dayOfTheWeek(0);
dayOfTheWeek(1);
dayOfTheWeek(2);
dayOfTheWeek(3);
dayOfTheWeek(4);
dayOfTheWeek(5);
dayOfTheWeek(6);
dayOfTheWeek(7);
dayOfTheWeek(8);
dayOfTheWeek(82);