document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    console.log("Email/Phone: " + email);
    console.log("Password: " + password);
    
    alert('Login submitted (for demo purposes only)');
});