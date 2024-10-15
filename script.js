document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    checkCredentials(username, password, function(isValid) {
        if (isValid) {
            // Redirect to the main page
            window.location.href = 'todo.html';  // Replace with the actual main page URL
        } else {
            // Alert if credentials are invalid
            alert('Invalid Username or Password!');
        }
    });
});

function checkCredentials(username, password, callback) {
    // Simple validation: Check if username is 'admin' and password is '12345'
    if (username === 'admin' && password === '12345') {
        callback(true);
    } else {
        callback(false);
    }
}


