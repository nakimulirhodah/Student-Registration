document.addEventListener('DOMContentLoaded', function() {
    // when the page is fully loaded
    const studentTableBody = document.getElementById('studentTableBody');
    let students = JSON.parse(localStorage.getItem('students')) || [];

    students.forEach(student => {
        let row = document.createElement('tr');
        // <tr>
        // <td>Cindy</td>
        // </tr>

        let firstNameCell = document.createElement('td');
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        let lastNameCell = document.createElement('td');
        lastNameCell.textContent = student.lastName;
        row.appendChild(lastNameCell);

        let emailCell = document.createElement('td');
        emailCell.textContent = student.email;
        row.appendChild(emailCell);

        studentTableBody.appendChild(row);
    });
});
