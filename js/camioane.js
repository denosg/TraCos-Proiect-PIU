window.addEventListener('DOMContentLoaded', function () {
    let text1 = document.getElementById('text1')

    if (window.innerWidth < 480) {
        text1.textContent = `Camioane avansate pentru livrări eficiente.`
    } else {
        text1.textContent = `Fiecare camion din flota noastra este dotat cu tehnologie avansata pentru monitorizarea in timp real a marfurilor si asigurarea unei livrari sigure si la timp. Echipa noastra de soferi experimentati si profesionisti aduce un plus de competenta si dedicare in fiecare calatorie.`;
    }

    const scania = document.getElementById('scania');
    const iveco = document.getElementById('iveco');
    const man = document.getElementById('man');

    scania.addEventListener('click', function () {
        var destinationUrl = '../src/camioane/scania.html';
        window.location.href = destinationUrl
    });
    iveco.addEventListener('click', function () {
        var destinationUrl = '../src/camioane/iveco.html';
        window.location.href = destinationUrl
    });
    man.addEventListener('click', function () {
        var destinationUrl = '../src/camioane/man.html';
        window.location.href = destinationUrl
    });
});