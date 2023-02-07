function formatGrade(grade) {
    let output;
    if (grade < 3) {
        output = "Fail";
        grade = 2;
    } else if (grade < 3.50) {
        output = "Poor";
    } else if (grade < 4.50) {
        output = "Good";
    } else if (grade < 5.50) {
        output = "Very good";
    } else {
        output = "Excellent";
    }
    if (grade > 2) {
        console.log(`${output} (${grade.toFixed(2)})`);
    } else {
        console.log(`${output} (${grade})`);

    }
}
formatGrade(3.33);
formatGrade(4.50);
formatGrade(2.99);