const slides = document.querySelectorAll('.slide, .slide-ativo');
let atual = 0;
function mudarSlide(index) {
    slides[atual].className = 'slide';
    atual = (index + slides.length) % slides.length;
    slides[atual].className = 'slide-ativo';
}
document.querySelector('.seta-direita').addEventListener('click', () => {
    mudarSlide(atual + 1);
});
document.querySelector('.seta-esquerda').addEventListener('click', () => {
    mudarSlide(atual - 1);
});
// Troca automática a cada 5 segundos
setInterval(() => mudarSlide(atual + 1), 5000);
