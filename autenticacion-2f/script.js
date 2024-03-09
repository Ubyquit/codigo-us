// Simulated database of users (in a real scenario, this would be a backend database)
const users = [
    { email: 'user1@example.com', password: 'password123', authCode: '123456' },
    { email: 'user2@example.com', password: 'abc123', authCode: '654321' }
];

function validateForm(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const authCode = document.getElementById('authCode').value;

    const user = users.find(u => u.email === email);

    if (!user) {
        alert('User not found. Please check your email.');
        return;
    }

    if (user.password !== password) {
        alert('Incorrect password. Please try again.');
        return;
    }

    if (user.authCode !== authCode) {
        alert('Incorrect authentication code. Please check your email.');
        return;
    }

    alert('Login successful!');
    // Here you can redirect the user to another page or perform other actions upon successful login
}
