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
