//Pegamos de uma vez todos os elementos, para que não tenhamos que armazenar em várias variáveis
const cards = document.querySelectorAll(
  ".check-card, .culto-card, .program-card, .aviso-card",
);

// lembrar de colocar o "quarto-card" aqui em cima

const acampCard = document.querySelector(".acamp-card");
const quartoConteudo = document.querySelector(".quarto-conteudo");

const conteudoCard = document.querySelectorAll(
  ".check-conteudo, .program-conteudo, .culto-conteudo, .aviso-conteudo",
);
// Lembrar de colocar o "quarto-conteudo" aqui em cima

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

      //Mesma lógica para ele desativar todos os conteudos
      conteudoCard.forEach((conteudo) => {
        conteudo.classList.add("desativado");
      });

      //Verifica o conteudo dentros dos cards
      const conteudoEscolhido = card.querySelector(
        ".check-conteudo, .program-conteudo, .culto-conteudo, .aviso-conteudo",
      );
      // lembrar de colocar o "quarto-conteudo" aqui em cima

      //se o conteudo foi encontrado ele remove a classe que desativa
      if (conteudoEscolhido) {
        conteudoEscolhido.classList.remove("desativado");
      }

      //Verifica se o elemento da vez (o elemento que está com o aumentar) é diferente dos demais elementos da lista
      cards.forEach((c) => {
        if (c !== card) c.classList.add("diminuir");
      });

      acampCard.classList.add("diminuir");
    } else {
      acampCard.classList.add("aumentarAcamp");

      conteudoCard.forEach((conteudo) => {
        conteudo.classList.add("desativado");
      });
    }
  });
});

function terremoto(botao) {
  botao.classList.add("tremor");

  setTimeout(() => {
    botao.classList.remove("tremor");
  }, 900);
}