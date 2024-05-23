const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados");

function exibirMenu() {
  navPerfil.style.display = "block";
}

linkPerfil.addEventListener("mouseover", exibirMenu);

// linkPerfil.addEventListener("mouseover", () => {
//   navPerfil.style.display = "block";
// });

// linkPerfil.addEventListener("mouseover", function() {
//   navPerfil.style.display = "block";
// });

// function teste1() {
//   alert("teste 1");
// }

// const teste2 = alert;

// const teste3 = function () { //função anônima
//   alert("teste 3");
// };

// const teste4 = () => { // arrow function (anônima)
//   alert("teste 4")
// };

// teste1()
// teste2("teste 2")
// teste3()
// teste4()

// capturar o elemento (linkPerfil)

// criar função para implementar a lógica
const exibirMenuSecundario = (evento) => {
  let pessoaApertou1 = evento.key === "1";
  let pessoaApertou0 = evento.key === "0";
  let menuEstaAberto = navPerfil.style.display === "block";

  // if (pessoaApertou1) {
  //   navPerfil.style.display = "block";
  // }

  console.log(evento);

  if (pessoaApertou1) {
    if (menuEstaAberto) {
      linkPerfilDados.click();
    } else {
      exibirMenu();
    }
  } else if (pessoaApertou0) {
    navPerfil.style.display = "none";
  }
};

// criar o "ouvidor" de eventos
document.addEventListener("keyup", exibirMenuSecundario);

// // console.log("argumento");

// window.addEventListener("keyup", (evento) => {
//   console.log(evento);

//   if (evento.key === "1") {
//     console.log("A tecla 1 foi pressionada!");
//     document.querySelector("#nav-perfil").style.display = "block";
//   }
// });
