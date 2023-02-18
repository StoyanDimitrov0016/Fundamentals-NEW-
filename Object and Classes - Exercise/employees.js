function employeeTable(employeesList) {
    for (const employeeNames of employeesList) {
        let worker = {
            name: employeeNames,
            personalNumber: employeeNames.length
        }
        console.log(`Name: ${worker.name} -- Personal Number: ${worker.personalNumber}`);
    }
}
employeeTable([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])