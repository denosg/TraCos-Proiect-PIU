window.addEventListener('DOMContentLoaded', function () {
    var text1 = document.getElementById('text1')

    if (window.innerWidth < 480) {
        text1.textContent = `TraCos este o ennblema a eficientei si sigurantei in lumea transportului de marfuri.`
        document.getElementById('info1').addEventListener('click', function () {
            // Replace 'your_destination_url' with the actual URL you want to redirect to
            var destinationUrl = '../src/transport_intern.html';

            window.location.href = destinationUrl
        });
        document.getElementById('info2').addEventListener('click', function () {
            // Replace 'your_destination_url' with the actual URL you want to redirect to
            var destinationUrl = '../src/transport_extern.html';

            window.location.href = destinationUrl
        });
    } else {
        text1.textContent = `TraCos este o ennblema a eficientei si sigurantei in lumea transportului de marfuri. Cu o flota moderna si un personal dedicat, suntem pionierii in livrarea prompta si sigura a marfurilor. Fiecare kilometru parcurs este o poveste de incredere si profesionalism. `;
    }

    const logo = this.document.getElementById('logo')
    logo.addEventListener('click', () => {
        window.location.href = 'index.html';
    })
});

document.getElementById('link1').addEventListener('click', function () {
    // Replace 'your_destination_page.html' with the actual page you want to redirect to
    window.location.href = '../src/transport_intern.html';
});

document.getElementById('link2').addEventListener('click', function () {
    // Replace 'your_destination_page.html' with the actual page you want to redirect to
    window.location.href = '../src/transport_extern.html';
});
