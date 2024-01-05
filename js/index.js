window.addEventListener('DOMContentLoaded', function () {
    const text1 = document.getElementById('text1')
    const text2 = document.getElementById('text2');

    if (window.innerWidth < 480) {
        text1.textContent = `TraCos este o ennblema a eficientei si sigurantei in lumea transportului de marfuri.`
        text2.textContent = `Alegandu-ne pe noi, optati pentru angajamentul nostru fata de calitate, rapiditate si incredere.`
    } else {
        text1.textContent = `TraCos este o ennblema a eficientei si sigurantei in lumea transportului de marfuri. Cu o flota moderna si un
        personal dedicat, suntem pionierii in livrarea prompta si sigura a marfurilor. Fiecare kilometru parcurs este
        o poveste de incredere si profesionalism.`;
        text2.textContent = `Alegandu-ne pe noi, optati pentru angajamentul nostru fata de calitate, rapiditate si incredere. Cu o echipa dedicata si o flota moderna, suntem partenerul de incredere pentru toate nevoile dvs. de transport marfa. `
    }

    const logo = this.document.getElementById('logo')
    logo.addEventListener('click', () => {
        window.location.href = 'index.html';
    })
});