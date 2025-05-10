// User data storage
let users = JSON.parse(localStorage.getItem('users')) || [
    {
        id: 1,
        name: "Admin User",
        email: "admin@library.com",
        password: "admin123", // In a real application, this would be hashed
        role: "admin"
    }
];

// DOM Elements
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const showSignupLink = document.getElementById('showSignup');
const showLoginLink = document.getElementById('showLogin');
const togglePasswordButtons = document.querySelectorAll('.toggle-password');

// Toggle between login and signup forms
showSignupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Toggle password visibility
togglePasswordButtons.forEach(button => {
    button.addEventListener('click', () => {
        const input = button.previousElementSibling;
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        button.classList.toggle('fa-eye');
        button.classList.toggle('fa-eye-slash');
    });
});

// Handle login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Store logged in user info
        localStorage.setItem('currentUser', JSON.stringify({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }));
        
        // Redirect to main page
        window.location.href = 'index.html';
    } else {
        showError('Invalid email or password');
    }
});

// Handle signup
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate passwords match
    if (password !== confirmPassword) {
        showError('Passwords do not match');
        return;
    }

    // Check if email already exists
    if (users.some(u => u.email === email)) {
        showError('Email already registered');
        return;
    }

    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password, // In a real application, this would be hashed
        role: 'member'
    };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Show success message and switch to login
    showSuccess('Account created successfully! Please login.');
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

// Show error message
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    const activeForm = document.querySelector('.auth-form:not(.hidden)');
    activeForm.insertBefore(errorDiv, activeForm.firstChild);
    
    setTimeout(() => {
        errorDiv.remove();
    }, 3000);
}

// Show success message
function showSuccess(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    
    const activeForm = document.querySelector('.auth-form:not(.hidden)');
    activeForm.insertBefore(successDiv, activeForm.firstChild);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
} 