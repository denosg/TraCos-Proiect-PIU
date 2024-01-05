window.addEventListener('DOMContentLoaded', function () {
    var text1 = document.getElementById('text1')

    if (window.innerWidth < 480) {
        text1.textContent = `Iveco aduce versatilitate și eficiență în lumea camioanelor, oferind soluții fiabile și durabile pentru transportul rutier.`
    } else {
        text1.textContent = `Camioanele Iveco impresionează prin versatilitate, oferind soluții de transport eficiente și fiabile. Cu tehnologii avansate și inovații constante, vehiculele Iveco sunt concepute pentru a satisface nevoile diverse ale industriei transportului rutier, evidențiindu-se prin performanță și durabilitate în fiecare călătorie.`;
    }
    const logo = this.document.getElementById('logo')
    logo.addEventListener('click', () => {
        window.location.href = '../../index.html';
    })
});