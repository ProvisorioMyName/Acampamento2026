//Fazendo a parte da animação do checklist
const checkCard = document.querySelector(".check-card");

checkCard.addEventListener("click", () => {
  checkCard.classList.toggle("aumentar")
   if (!checkCard.classList.contains("aumentar")){
    checkCard.classList.add("diminuir")
  }else{
    checkCard.classList.remove("diminuir")
}});

//Parte do quartos
const quartoCard = document.querySelector(".quarto-card");

quartoCard.addEventListener("click", () => {
  quartoCard.classList.toggle("aumentar");
  if (!quartoCard.classList.contains("aumentar")){
    quartoCard.classList.add("diminuir")
  }else{
    quartoCard.classList.remove("diminuir")
}});

//Parte dos cultos
const cultos = document.querySelector(".culto-card");

cultos.addEventListener("click", () => {
  cultos.classList.toggle("aumentar");
  if (!cultos.classList.contains("aumentar")){
    cultos.classList.add("diminuir")
  }else{
    cultos.classList.remove("diminuir")
  }});

//Parte da programação
const programacao = document.querySelector(".program-card");

programacao.addEventListener("click", () => {
  programacao.classList.toggle("aumentar");
  if (!programacao.classList.contains("aumentar")){
    programacao.classList.add("diminuir")
  }else{
    programacao.classList.remove("diminuir")
  }});