// Efeito de digitação no título do hero
const titulo = document.querySelector('.hero h2');
const textoOriginal = titulo.textContent;
titulo.textContent = '';
titulo.style.borderRight = '2px solid white';
let i = 0;

function digitar() {
    if (i < textoOriginal.length) {
        titulo.textContent += textoOriginal.charAt(i);
        i++;
        setTimeout(digitar, 150);
    } else {
        titulo.style.borderRight = 'none';
    }
}

// Iniciar animações ao carregar
window.addEventListener('load', () => {
    digitar();
    // Fade-in dos elementos
    document.querySelector('.hero-content').style.opacity = '1';
    document.querySelector('.hero-content').style.transform = 'translateY(0)';
    document.querySelector('.hero-image').style.opacity = '1';
    document.querySelector('.hero-image').style.transform = 'translateY(0)';
    // Animação escalonada dos destaques
    const features = document.querySelectorAll('.hero-features span');
    features.forEach((span, index) => {
        setTimeout(() => {
            span.style.opacity = '1';
            span.style.transform = 'scale(1) translateY(0)';
        }, 2000 + index * 500); // Delay maior para ver melhor
    });
});

// Animação de fade-in nos cards do cardápio
const cards = document.querySelectorAll('.card');
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${index * 0.1}s`;
        }
    });
}, { threshold: 0.1 });

cards.forEach(card => {
    cardObserver.observe(card);
});

// Scroll suave até o cardápio ou redirecionar para página
document.getElementById("btnCardapio").addEventListener("click", () => {
    window.location.href = "Cardápio.html";
});

// Botão WhatsApp
function abrirWhatsApp() {
    const telefone = "5599999999999"; // trocar pelo número do cliente
    const mensagem = "Olá! Quero fazer um pedido 🍔";
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");
}
