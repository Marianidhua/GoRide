// script.js

document.addEventListener('DOMContentLoaded', function() {
    console.log("Website GoRide siap!");


    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const contactForm = document.querySelector('.contact-form-box form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {

            const name = contactForm.querySelector('input[name="name"]').value;
            const email = contactForm.querySelector('input[name="email"]').value;
            const phone = contactForm.querySelector('input[name="phone"]').value;

            if (name && email && phone) {
                console.log("Data kontak siap dikirim:");
                console.log("Nama:", name);
                console.log("Email:", email);
                console.log("Telepon:", phone);
            } else {
            
            }
        });
    }

    
});