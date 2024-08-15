//antes de carregar esta script, carregue o script funcoesGlobais

const componentesHTML = [
  {
    nome: "estrutura do header",
    src: localizacao_da_raiz() + "components/htmls/header.js"
  },
  {
    nome: "estrutura do footer",
    src: localizacao_da_raiz() + "components/htmls/footer.js"
  }
]

function carregarComponentesHTML(){
  const head = document.querySelector("head")

  for(let i in componentesHTML){
    const script = document.createElement("script")
    script.src = componentesHTML[i].src
    head.appendChild(script);
  }
}

carregarComponentesHTML()