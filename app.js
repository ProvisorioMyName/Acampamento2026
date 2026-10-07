//Fazendo a parte da animação do checklist
const checklist = document.querySelector("#checklist");
const checkCard = document.querySelector(".check-card");
const checkLink = document.querySelector(".check-link");

checklist.addEventListener("click", () => {
  checkCard.classList.toggle("aumentar");
});

//Parte do quartos
const quartoCard = document.querySelector(".quarto-card");

quartoCard.addEventListener("click", () => {
  quartoCard.classList.toggle("aumentar");
  quartoLink.classList.toggle("subir");
});
