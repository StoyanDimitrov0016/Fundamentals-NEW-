function weekTimetable(appointments) {
    let schedule = {};
    for (const appointment of appointments) {
        let [day, person] = appointment.split(' ');
        if (schedule[day]) {
            console.log(`Conflict on ${day}!`);
        }
        else {
            console.log(`Scheduled for ${day}`);

            schedule[day] = person;
        }
    }
    for (const day in schedule) {
        console.log(day, '->', schedule[day]);
    }
}
weekTimetable(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])
    