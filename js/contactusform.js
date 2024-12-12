document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';

    // Validate inputs
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    let isValid = true;

    if (!name) {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    if (!email) {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (isValid) {
        // Show SweetAlert success message
        Swal.fire({
            title: 'Messages Sucessfully!',
            text: 'We will Contact You as soon as .',
            icon: 'success',
            confirmButtonText: 'OK'
        });

        // Optionally, clear the form
        document.getElementById('contactForm').reset();
    }
});

// Add input event listeners to clear error messages when typing
document.getElementById('name').addEventListener('input', function() {
    document.getElementById('nameError').textContent = '';
});

document.getElementById('email').addEventListener('input', function() {
    document.getElementById('emailError').textContent = '';
});