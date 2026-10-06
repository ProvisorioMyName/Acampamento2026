//Fazendo a parte da animação do checklist
const checklist = document.querySelector("#checklist");
const checkCard = document.querySelector(".check-card");
const checkLink = document.querySelector(".check-link");
const rebarba = document.querySelector('[class$="-link"]');

checklist.addEventListener("click", () => {
  checklist.classList.toggle("subir");
  checkCard.classList.toggle("aumentar");
  checkLink.classList.toggle("subir");
});

//Parte do quartos
const quartoCard = document.querySelector(".quarto-card");
const quartoLink = document.querySelector(".quarto-link");

quartoCard.addEventListener("click", () => {
  quartoCard.classList.toggle("aumentar");
  quartoLink.classList.toggle("subir");
});
