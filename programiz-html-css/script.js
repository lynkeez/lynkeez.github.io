// Functional Programming Approach
const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
};

const isValidPassword = (password) => {
    return password.length > 8;
};

const validateForm = (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username ||!password) {
        document.getElementById('error-message').innerHTML = 'Please fill in both fields.';
        return;
    }

    if (!isValidEmail(username)) {
        document.getElementById('error-message').innerHTML = 'Invalid email address.';
        return;
    }

    if (!isValidPassword(password)) {
        document.getElementById('error-message').innerHTML = 'Password must be more than 8 characters.';
        return;
    }

    // Form is valid, proceed with login
    console.log('Form is valid!');
};

document.getElementById('login-form').addEventListener('submit', validateForm);

// Object-Oriented Programming (OOP) Approach
class Validator {
    constructor() {
        this.username = document.getElementById('username').value;
        this.password = document.getElementById('password').value;
    }

    isValidEmail() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(this.username);
    }

    isValidPassword() {
        return this.password.length > 8;
    }

    validateForm(event) {
        event.preventDefault();
        if (!this.username ||!this.password) {
            document.getElementById('error-message').innerHTML = 'Please fill in both fields.';
            return;
        }

        if (!this.isValidEmail()) {
            document.getElementById('error-message').innerHTML = 'Invalid email address.';
            return;
        }

        if (!this.isValidPassword()) {
            document.getElementById('error-message').innerHTML = 'Password must be more than 8 characters.';
            return;
        }

        // Form is valid, proceed with login
        console.log('Form is valid!');
    }
}

const validator = new Validator();
document.getElementById('login-form').addEventListener('submit', validator.validateForm.bind(validator));

// Procedural Programming Approach
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    return password.length > 8;
}

function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (!username ||!password) {
        document.getElementById('error-message').innerHTML = 'Please fill in both fields.';
        return;
    }

    if (!isValidEmail(username)) {
        document.getElementById('error-message').innerHTML = 'Invalid email address.';
        return;
    }

    if (!isValidPassword(password)) {
        document.getElementById('error-message').innerHTML = 'Password must be more than 8 characters.';
        return;
    }

    // Form is valid, proceed with login
    console.log('Form is valid!');
}

document.getElementById('login-form').addEventListener('submit', validateForm);
