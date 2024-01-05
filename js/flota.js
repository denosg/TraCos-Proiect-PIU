window.addEventListener('DOMContentLoaded', function () {
    var text1 = document.getElementById('text1')

    if (window.innerWidth < 480) {
        text1.textContent = `Camioane avansate pentru livrări eficiente.`
    } else {
        text1.textContent = `Flota noastră de camioane și dubițe, dotată cu tehnologie de ultimă generație, asigură livrări rapide și sigure. Eficiența și performanța sunt pilonii ce definesc angajamentul nostru în transport.`;
    }

    var imageWithOverlay = document.querySelector('.image-with-overlay');

    // Add a click event listener to the image
    imageWithOverlay.addEventListener('click', function () {
        // Replace 'your_destination_url' with the actual URL you want to redirect to
        var destinationUrl = '../src/camioane.html';

        window.location.href = destinationUrl
    });
});