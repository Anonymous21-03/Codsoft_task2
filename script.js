document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const getStartedBtn = document.getElementById('getStartedBtn');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll to features section
    getStartedBtn.addEventListener('click', function(event) {
        event.preventDefault();
        const featuresSection = document.getElementById('features');
        featuresSection.scrollIntoView({ behavior: 'smooth' });
    });
});