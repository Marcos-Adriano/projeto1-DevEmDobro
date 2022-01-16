// quando clicar na seta pra avançar temos que
// esconder todas as imagens e mostrar a próxima imagem

//     a imagem atual começa em 0 pq é a primeira imagem
//     assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens
//     pra poder saber que agora eu vou mostrar a segunda imagem

//     esconder todas as imagens
//         pegar todas as imagens usando DOM e remover a classe mostrar

//     mostrar a próxima imagem
//         pegar todas as imagens, descobrir qual é a próxima, e colocar a classe "mostrar" nela

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById('btn-avancar');
const setaVoltar = document.getElementById('btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach((imagem) => {
      imagem.classList.remove("mostrar");
    });
  }
  function mostrarImagem() { 
    imagensPainel[imagemAtual].classList.add("mostrar");
  }
// quando clicar na seta pra avançar temos que
//     esconder todas as imagens e mostrar a próxima imagem
setaAvancar.addEventListener('click', function() {
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === totalDeImagens) {
        setaAvancar.style.opacity = 0.4;
        return;
    }
    // a imagem atual começa em 0 pq é a primeira imagem
    //     assim que for clicado no avançar eu preciso adicionar mais 1 ao contador de imagens
    //     pra poder saber que agora eu vou mostrar a segunda imagem
    imagemAtual++;
    // se a opacidade da seta for diferente de 1
    // remove a propriedade opacidade atual dela  
    if (setaVoltar.style.opacity !== 1) {
        setaVoltar.style.removeProperty("opacity");        
      }
    // se a imagem que está mostrando na tela for a ultima 
    // aplica opacidade de 50% nela
    if (imagemAtual === totalDeImagens) {
        setaAvancar.style.opacity = 0.4;
    } 
    // esconder todas as imagens
    //         pegar todas as imagens usando DOM e remover a classe mostrar
    esconderImagens();
    // mostrar a próxima imagem
    //         pegar todas as imagens, descobrir qual é a próxima, e colocar a classe "mostrar" nela
    mostrarImagem();
})

setaVoltar.addEventListener('click', function(){
    const totalDeImagens = imagensPainel.length - 1;
    if(imagemAtual === 0){
        setaVoltar.style.opacity = 0.4;
        return;
    }
    imagemAtual--;
    if (setaAvancar.style.opacity !== 1) {
        setaAvancar.style.removeProperty("opacity");
        }
        if (imagemAtual === 0) { 
        setaVoltar.style.opacity = 0.4;
        }
    esconderImagens();
    mostrarImagem();
})