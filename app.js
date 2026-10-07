//Fazendo a parte da animação do checklist
const checkCard = document.querySelector(".check-card");

checkCard.addEventListener("click", () => {
  checkCard.classList.toggle("aumentar");
});

//Parte do quartos
const quartoCard = document.querySelector(".quarto-card");

quartoCard.addEventListener("click", () => {
  quartoCard.classList.toggle("aumentar");
});

//Parte dos cultos
const cultos = document.querySelector(".culto-card");

cultos.addEventListener("click", () => {
  cultos.classList.toggle("aumentar");
});

//Parte da programação
const programacao = document.querySelector(".program-card");

programacao.addEventListener("click", () => {
  programacao.classList.toggle("aumentar");
});