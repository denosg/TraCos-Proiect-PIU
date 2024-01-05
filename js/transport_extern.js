window.addEventListener('DOMContentLoaded', function () {
    var text1 = document.getElementById('text1')

    if (window.innerWidth < 480) {
        text1.textContent = `Tarifele noastre de transport extern asigură o experiență optimă, adaptată marfei.`
    } else {
        text1.textContent = `Pentru a-ți oferi cea mai bună experiență, tarifele noastre de transport extern sunt calculate cu atenție, având în vedere tipul de marfă, distanța parcursă și specificațiile vehiculului TIR. Astfel, garantăm nu doar siguranța și securitatea mărfii tale, ci și o eficiență maximă în procesul de transport.`;
    }
});