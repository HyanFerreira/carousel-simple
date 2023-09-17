let btnNext = document.querySelector('.btn-next');
let btnPrevious = document.querySelector('.btn-previous');
let carousel = document.querySelector('.div');
let currentPosition = 0;

// Define o tamanho de cada card e o espaçamento entre eles
let cardWidth = 200; //elemento chave, aqui pode ser inserido o tamanho desejado do card
let cardSpacing = 30; //elemento chave, insia aqui o espaçamento entre os cards
let cardPositionNext = (cardWidth + cardSpacing) * 3; //leia a linha 11
let cardPositionPrevious = (cardWidth + cardSpacing) * 4; //leia a linha 11
//devemos fazer uma simples contagemdos cards exibidos, o numero 3 e 4 são uma conta simples para que o carrossel não exiba um espaço em branco sem nenhum card. Dito isso, ao alterar os card e espaçamentos, modifique o 3 e 4 até ficar sem o espaço em branco. Se não quiser contar.. vai no chute, tente com 2 e 3, 5 e 6n mas sempre será assim, se você aumentou um, aumente o outro, exemplo: de 3 e 4, mudou o 3 para 4, logo o 4 mudara para 5.

// Calcula o deslocamento com base no número de cards
let numCards = document.querySelectorAll('.card').length;
let totalWidthNext = numCards * (cardWidth + cardSpacing) - cardPositionNext;
let totalWidthPrevious = numCards * (cardWidth + cardSpacing) - cardPositionPrevious;

// Função NEXT
btnNext.addEventListener('click', () => {
    currentPosition -= (cardWidth + cardSpacing);
    if (currentPosition <= -totalWidthNext) {
        currentPosition = 0;
    }
    carousel.style.transform = `translateX(${currentPosition}px)`;
});

// Função PREVIOUS
btnPrevious.addEventListener('click', () => {
    if (currentPosition === 0) {
        currentPosition = -(totalWidthPrevious);
    } else {
        currentPosition +=(cardWidth + cardSpacing);
    }
    carousel.style.transform = `translateX(${currentPosition}px)`;
});

// btnNext.addEventListener('click', () => {
//     currentPosition -= 230;
//     if (currentPosition <= -690) {
//         currentPosition = 0
//     }
//     carousel.style.transform = `translateX(${currentPosition}px)`;
// });

// btnPrevious.addEventListener('click', () => {
//     if (currentPosition === 0) {
//         currentPosition = -460
//     } else {
//         currentPosition += 230;
//     }
//     carousel.style.transform = `translateX(${currentPosition}px)`;
// });