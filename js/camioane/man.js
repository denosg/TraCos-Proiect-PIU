window.addEventListener('DOMContentLoaded', function () {
    var text1 = document.getElementById('text1')

    if (window.innerWidth < 480) {
        text1.textContent = `Camioanele MAN combină performanța excepțională cu fiabilitatea dovedită, oferind soluții inteligente și durabile pentru transportul rutier.`
    } else {
        text1.textContent = `Camioanele MAN reprezintă o combinație de performanță excepțională, tehnologie avansată și fiabilitate dovedită. Cu un design inovator și soluții de transport inteligente, aceste vehicule sunt sinonime cu eficiența și durabilitatea. MAN se distinge prin angajamentul său față de calitatea și inovația constantă, oferind soluții de transport rutier de încredere pentru diversele provocări ale industriei.`;
    }
    const logo = this.document.getElementById('logo')
    logo.addEventListener('click', () => {
        window.location.href = '../../index.html';
    })
});