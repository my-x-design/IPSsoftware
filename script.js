// Initialize user storage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Handle Signup
document.getElementById('signup-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert('User already exists!');
        return;
    }

    // Add new user
    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));

    alert('Sign Up successful! You can now log in.');
    window.location.href = 'login.html'; // Redirect to login page
});

// Handle Login
document.getElementById('login-form')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Check for existing user
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        sessionStorage.setItem('loggedInUserEmail', user.email); // Store email in session
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to home page
    } else {
        alert('Invalid email or password. Please try again.');
    }
});
