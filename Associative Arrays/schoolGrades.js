function schoolGrades(studentList) {
    let students = {};

    for (const student of studentList) {
        let [name, ...grades] = student.split(' ');

        if (students[name]) {

            let initialGrades = students[name];

            for (const grade of grades) {
                initialGrades.push(grade)
            }

            students[name] = initialGrades;

        } else {
            students[name] = grades;
        }
    }
    for (const name in students) {
        let grades = students[name].map(Number);
        let averageGrade = grades.reduce((a, b) => a + b, 0) / grades.length;
        students[name] = averageGrade;
    }
    let alphabeticallySortedStudentNames = Object.entries(students).sort((a, b) => a[0].localeCompare(b[0]));
    for (const [name, avgGrade] of alphabeticallySortedStudentNames) {
        console.log(`${name}: ${avgGrade.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'])