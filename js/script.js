function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

/***********Dropdown list Toggler button  Vlaidate here ******* */
document.addEventListener("DOMContentLoaded", () => {
    const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

    dropdownToggles.forEach((toggle) => {
        toggle.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior

            const dropdownMenu = toggle.nextElementSibling; // Find the associated dropdown menu
            const isVisible = dropdownMenu.style.display === "block";

            // Close any open dropdowns
            document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                menu.style.display = "none";
            });

            // Toggle the clicked dropdown menu
            dropdownMenu.style.display = isVisible ? "none" : "block";
        });
    });

    // Optional: Close dropdowns if clicking outside of them
    document.addEventListener("click", (event) => {
        if (!event.target.closest(".dropdown")) {
            document.querySelectorAll(".dropdown-menu").forEach((menu) => {
                menu.style.display = "none";
            });
        }
    });
});



/******************** tsestimonial auto sliding***************/
document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll(".testimonial-card");
    let currentIndex = 0;

    function showNextTestimonial() {
        // Hide current testimonial
        testimonials[currentIndex].classList.remove("active");

        // Move to the next testimonial
        currentIndex = (currentIndex + 1) % testimonials.length;

        // Show the next testimonial
        testimonials[currentIndex].classList.add("active");
    }

    // Automatically switch testimonials every 5 seconds
    setInterval(showNextTestimonial, 8000);
});


/******************** Happpy clints ********************************/
document.addEventListener("DOMContentLoaded", function() {
    const statNumbers = document.querySelectorAll(".stat-number");

    const animateNumbers = (entry) => {
        if (entry.isIntersecting) {
            statNumbers.forEach((numberElement) => {
                const targetNumber = parseInt(numberElement.dataset.number, 10);
                let currentNumber = 0;

                const increment = Math.ceil(targetNumber / 100);

                const counter = setInterval(() => {
                    currentNumber += increment;
                    if (currentNumber >= targetNumber) {
                        numberElement.textContent = targetNumber;
                        clearInterval(counter);
                    } else {
                        numberElement.textContent = currentNumber;
                    }
                }, 50);
            });
        }
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(animateNumbers);
    });

    statNumbers.forEach((element) => observer.observe(element));
});

/*************  Subscribre our channel throug Email ********** */
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form submission

    const emailField = document.getElementById('subscribeEmail');
    const emailError = document.getElementById('subscribeError');
    const email = emailField.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

    // Clear previous errors
    emailError.textContent = '';

    // Validate email
    if (email === '') {
        emailError.textContent = 'Email is required.';
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Enter a valid email address.';
    } else {
        // Successful subscription logic (mockup)
        alert('Thank you for subscribing!');
        emailField.value = ''; // Clear the field
    }
});

// Clear error message on typing
document.getElementById('subscribeEmail').addEventListener('input', function() {
    document.getElementById('subscribeError').textContent = '';
});
