document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const signInLink = document.getElementById('signIn-link');
    const contactLink = document.getElementById('contact-link');

    homeLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'index.html';
    });

    aboutLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'about.html';
    });

    signInLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'signIn.html';
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'contact.html';
    });

});

