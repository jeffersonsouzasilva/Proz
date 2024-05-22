////// VARIÁVEIS  //////
let quantidadeSubtotal = document.getElementById("quantidade-subtotal");
let valorSubtotal = document.getElementById("valor-subtotal");
let botaoAdicionarProduto = document.getElementById("btn-adicionar-produto-01");
//const valorUnitario = 11.66
let inputQuantidadeProduto = document.getElementById("quantidade-produto-01");
let botaoSubtrairProduto = document.getElementById("btn-subtrair-produto-01");

let subtotalInfo = {
  quantidade: 1,
  valor: 11.66,
};

////// FUNÇÕES //////
function atualizarPagina() {
  quantidadeSubtotal.innerText = subtotalInfo.quantidade + " item(s)";
  valorSubtotal.innerText = subtotalInfo.valor;
  inputQuantidadeProduto.value = subtotalInfo.quantidade
}

atualizarPagina()

function incrementarQuatidadeProduto(){
  subtotalInfo.quantidade ++
  subtotalInfo.valor += 11.66
  atualizarPagina()
};

function decrementarQuantidadeProduto(){
  if(subtotalInfo.quantidade > 0){
    subtotalInfo.quantidade--
    subtotalInfo.valor -= 11.66
    atualizarPagina()
  }

}

// incrementarQuatidadeProduto()
// valorUnitario = 0
botaoAdicionarProduto.addEventListener(  "click", incrementarQuatidadeProduto)

// function dividir(dividendo, divisor){
//   return dividendo / divisor
// }

// const resultado = dividir(64, 4)
// const resultado = dividir
// console.log(resultado)

// const imprimir = console.log("teste")
// console.log(imprimir)
// imprimir("oi, turma!")

botaoSubtrairProduto.addEventListener("click", decrementarQuantidadeProduto)