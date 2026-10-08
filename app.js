//Fazendo a parte da animação do checklist
const checkCard = document.querySelector(".check-card");
const acampCard = document.querySelector(".acamp-card")

checkCard.addEventListener("click", () => {
  checkCard.classList.toggle("aumentar")
  acampCard.classList.toggle("diminuir")
   if (!checkCard.classList.contains("aumentar")){
    acampCard.classList.toggle("aumentarAcamp")
    checkCard.classList.add("diminuir")
  }else{
    checkCard.classList.remove("diminuir")
}});

//Parte do quartos
const quartoCard = document.querySelector(".quarto-card");

quartoCard.addEventListener("click", () => {
  quartoCard.classList.toggle("aumentar");
  acampCard.classList.toggle("diminuir")
  if (!quartoCard.classList.contains("aumentar")){
    acampCard.classList.toggle("aumentarAcamp")
    quartoCard.classList.add("diminuir")
  }else{
    quartoCard.classList.remove("diminuir")
}});

//Parte dos cultos
const cultos = document.querySelector(".culto-card");

cultos.addEventListener("click", () => {
  cultos.classList.toggle("aumentar");
  acampCard.classList.toggle("diminuir")
  if (!cultos.classList.contains("aumentar")){
    acampCard.classList.toggle("aumentarAcamp")
    cultos.classList.add("diminuir")
  }else{
    cultos.classList.remove("diminuir")
  }});

//Parte da programação
const programacao = document.querySelector(".program-card");

programacao.addEventListener("click", () => {
  programacao.classList.toggle("aumentar");
  acampCard.classList.toggle("diminuir")
  if (!programacao.classList.contains("aumentar")){
    acampCard.classList.toggle("aumentarAcamp")
    programacao.classList.add("diminuir")
  }else{
    programacao.classList.remove("diminuir")
  }});