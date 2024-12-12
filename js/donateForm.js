/************** toggle button */
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}


/******* Form  Validation ********** */
document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default form submission
    let isValid = true;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(error => (error.textContent = ''));

    // Validate Full Name
    const name = document.getElementById('name').value.trim();
    if (name === '') {
        document.getElementById('nameError').textContent = 'Full Name is required.';
        isValid = false;
    }

    // Validate Email
    const email = document.getElementById('email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'A valid Email is required.';
        isValid = false;
    }

    // Validate Phone Number
    const phone = document.getElementById('phone').value.trim();
    if (phone === '' || phone.length < 10) {
        document.getElementById('phoneError').textContent = 'A valid Phone Number is required.';
        isValid = false;
    }

    // Validate Address (Optional, no error if empty)
    const address = document.getElementById('address').value.trim();
    if (address.length > 1000) {
        document.getElementById('addressError').textContent = 'Address must be under 1000 characters.';
        isValid = false;
    }

    // Validate Donation Amount

    //  Type Caustom Payments here 


    // Validate Purpose
    const purpose = document.getElementById('purpose').value.trim();
    if (purpose === '') {
        document.getElementById('purposeError').textContent = 'Please select a purpose.';
        isValid = false;
    }

    // Validate Payment Mode
    const payment = document.getElementById('payment').value.trim();
    if (payment === '') {
        document.getElementById('paymentError').textContent = 'Please select a payment mode.';
        isValid = false;
    }

    // Validate Additional Message (Optional, no error if empty)
    const message = document.getElementById('message').value.trim();
    if (message.length > 500) {
        document.getElementById('messageError').textContent = 'Message must be under 500 characters.';
        isValid = false;
    }

    // If everything is valid, trigger SweetAlert for success
    if (isValid) {
        Swal.fire({
            title: 'Donation Successful!',
            text: 'Thank you for your donation!',
            icon: 'success',
            confirmButtonText: 'Okay',
        }).then(() => {
            document.getElementById('donationForm').submit(); // Submit the form after success message
        });
    }
});

// Hide error message when user starts typing or changes input
document.querySelectorAll('input, textarea, select').forEach(input => {
    input.addEventListener('input', function() {
        const errorField = document.getElementById(this.id + 'Error');
        if (errorField) {
            errorField.textContent = ''; // Clear the error message
        }
    });

    input.addEventListener('change', function() {
        const errorField = document.getElementById(this.id + 'Error');
        if (errorField) {
            errorField.textContent = ''; // Clear the error message
        }
    });
});