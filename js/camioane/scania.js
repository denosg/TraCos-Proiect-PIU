window.addEventListener('DOMContentLoaded', function () {
    var text1 = document.getElementById('text1')

    if (window.innerWidth < 480) {
        text1.textContent = `Camioane Scania: performanță excelentă, eficiență și design inovator pentru soluții fiabile de transport.`
    } else {
        text1.textContent = `Camioanele Scania se evidențiază prin performanță excelentă, eficiență energetică și design inovator, reprezentând soluții fiabile și durabile pentru transportul rutier.`;
    }

    const logo = this.document.getElementById('logo')
    logo.addEventListener('click', () => {
        window.location.href = '../../index.html';
    })
});