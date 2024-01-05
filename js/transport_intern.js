window.addEventListener('DOMContentLoaded', function () {
    var text1 = document.getElementById('text1')

    if (window.innerWidth < 480) {
        text1.textContent = `TraCos oferă transport intern de înaltă calitate, adaptat clientului.`
    } else {
        text1.textContent = `Transportul intern reprezintă coloana vertebrală a unei economii prospere și a unei logistici eficiente. În cadrul acestei rețele, TraCos se distinge prin servicii de transport de înaltă calitate, adaptate nevoilor clienților noștri.`;
    }

    const logo = this.document.getElementById('logo')
    logo.addEventListener('click', () => {
        window.location.href = '../index.html';
    })
});