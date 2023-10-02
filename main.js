// Obtém uma lista de todos os cards com a classe "card"
const cards = document.querySelectorAll('.card');

// Função para exibir os cards após 2 segundos
function showCards() {
  setTimeout(() => {
    cards.forEach((card) => {
      card.style.display = 'block';
    });
  }, 3000); // 2 segundos em milissegundos
}

// Chama a função para exibir os cards após 2 segundos
showCards();

// Adiciona ouvintes de eventos para alternar entre texto e imagem
cards.forEach((card, index) => {
  const cardText = card.querySelector('.card-text');
  const cardImage = card.querySelector('.card-image');

  card.addEventListener('mouseover', () => {
    cardText.style.display = 'none';
    cardImage.style.display = 'block';
  });

  card.addEventListener('mouseout', () => {
    cardText.style.display = 'block';
    cardImage.style.display = 'none';
  });

  card.addEventListener('touchstart', () => {
    cardText.style.display = 'none';
    cardImage.style.display = 'block';
  });

  card.addEventListener('touchend', () => {
    cardText.style.display = 'block';
    cardImage.style.display = 'none';
  });
});

// Obtém o elemento HTML onde você deseja exibir o ano
const currentYearElement = document.getElementById('current-year');

// Obtém o ano atual
const currentYear = new Date().getFullYear();

// Define o ano atual no elemento HTML
currentYearElement.textContent = currentYear;
