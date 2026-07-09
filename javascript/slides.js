//Codigo Slides
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


//Codigo Pesquisar 
const filmes = [
    {nome: "Encanto", link: "filme_1.html"},
    {nome:"Aranhaverso", link: "filme_2.html"},
    {nome:"Ron Bugado", link: "filme_3.html"},
    {nome:"Flow", link: "filme_4.html"},
    {nome:"Como magia", link: "filme_5.html"},
    {nome:"Divertidamente", link: "filme_6.html"}
]

const botao = document.querySelector('.botao-procurar')

botao.addEventListener('click', function(){

    const buscar = document.querySelector('#pesquisar input').value
   
    const resultado = filmes.find(function(filme){
        return filme.nome.toLowerCase() === buscar.toLowerCase()
       
    })

    if (resultado){
        window.location.href = resultado.link
    } else{
        alert('O filme não foi encontrado!')
    }
})

//Sugestões de Pesquisa
const campoBusca = document.querySelector('#pesquisar input')

campoBusca.addEventListener('input', function(){
    const digitado = document.querySelector('input').value
    const sugestao = document.querySelector('#sugestoes')

    const filtrados = filmes.filter(function(filme){
        return filme.nome.toLowerCase().includes(digitado.toLowerCase())
    })

    if (digitado === ""){
        sugestao.innerHTML = ""
    } else {
        sugestao.innerHTML = ""
        filtrados.forEach(function(filme){
            sugestao.innerHTML += `<a href="${filme.link}">${filme.nome}</a>`
        })
    }
})