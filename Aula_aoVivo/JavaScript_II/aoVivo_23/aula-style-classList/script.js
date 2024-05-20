// alert()
const h2 = document.querySelector("h2");
// h2.style.color = "red"
// h2.style.fontSize = "100px" // propriedade do CSS: font-size
h2.style.color = "blue";
h2.style.fontSize = "50px"; // propriedade do CSS: font-size

const username = document.querySelector("#login-usuario");
const errorText = document.querySelectorAll(".error-text");
const password = document.querySelector("#login-senha");

// o usuário digitou um nome inválido
function mostrarErroUsername() {
  // username.style.backgroundColor = "red"
  username.classList.add("error");
  // username.style.border = "solid red"
  // const form = document.querySelector("form")
  // form.style.display = "none"
  errorText[0].classList.add("visible");
}

//o usuário corrigiu o nome, mas digitou uma senha inválida /min 1:01:23
function mostrarSucessoUsername() {
  username.classList.remove("error");
  errorText[0].classList.remove("visible");
  username.classList.add("correct");
}

function mostrarErroSenha() {
  password.classList.add("error");
  errorText[1].classList.add("visible");
}

mostrarErroUsername();
mostrarSucessoUsername();
mostrarErroSenha();
