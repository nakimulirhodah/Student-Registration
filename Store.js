document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    const student = {
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    // Get existing students from local storage
    let students = JSON.parse(localStorage.getItem('students')) || [];

    // Add the new student to the array
    students.push(student);

    // Save the updated array back to local storage
    localStorage.setItem('students', JSON.stringify(students));

    // Redirect to the results page
    window.location.href = 'results.html';
});

