
//Pegamos de uma vez todos os elementos, para que não tenhamos que armazenar em várias variáveis
const cards = document.querySelectorAll(
  ".check-card, .quarto-card, .culto-card, .program-card",
);
const acampCard = document.querySelector(".acamp-card");

cards.forEach((card) => {
  //Pelo parametro "card" (o item da vez que está sendo rodado) verifiacmos no clique dele se ele tem a classe "aumentar"
  card.addEventListener("click", () => {
    const estavaAumentado = card.classList.contains("aumentar");

    //Fazemos outro forEach para resetar todos os elementos com o remove
    cards.forEach((c) => {
      c.classList.remove("aumentar", "diminuir");
    });
    acampCard.classList.remove("diminuir", "aumentarAcamp");

    if (!estavaAumentado) {
      card.classList.add("aumentar");

      //Verifica se o elemento da vez (o elemento que está com o aumentar) é diferente dos demais elementos da lista
      cards.forEach((c) => {
        if (c !== card) c.classList.add("diminuir");
      });

      acampCard.classList.add("diminuir");
    } else {
      acampCard.classList.add("aumentarAcamp");
    }
  });
});
