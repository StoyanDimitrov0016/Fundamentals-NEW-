function companyEmployees(employeesList) {
    const employees = {};
    employeesList.forEach(employee => {
        const [company, name] = employee.split(' -> ');
        if (!employees[company]) {
            employees[company] = new Set();
            employees[company].add(name);
        } else {
            employees[company].add(name);
        }
    });
    const sortedByCompany = Object.entries(employees).sort((a, b) => a[0].localeCompare(b[0]));
    sortedByCompany.forEach(employee => {
        const companyName = employee[0];
        const allIds = employee[1];
        console.log(companyName);
        allIds.forEach(id => console.log(`-- ${id}`));
    });
}
companyEmployees([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345']);