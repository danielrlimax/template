const phoneNumber = "5519997103303"; 
const message = encodeURIComponent("Olá João! Estou no site e quero um burguer caprichado. 🍔");
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

document.addEventListener("DOMContentLoaded", function() {
    // Aplica o link ao botão flutuante
    const floatBtn = document.getElementById('whatsappFloat');
    if (floatBtn) {
        floatBtn.href = whatsappUrl;
    }

    // Opcional: Efeito simples de mudar o cabeçalho ao rolar
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.style.backgroundPosition = "center bottom";
        } else {
            header.style.backgroundPosition = "center center";
        }
    });
});