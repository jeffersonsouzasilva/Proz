// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// Mostrar popup de campo obrigatório
function mostrarPopup() {
  usernameLabel.classList.add("required-popup");
}

usernameInput.addEventListener("focus", mostrarPopup);

// Ocultar popup de campo obrigatório
function ocultarPopup() {
  usernameLabel.classList.remover("required-popup");
}

usernameInput.addEventListener("blur", ocultarPopup);

// Validar valor do input

function validarUsername(evento) {
  const valor = evento.target.value;
  // console.log(evento.target.value)
  console.log(valor);
  // console.log(usernameInput.value)

  if (valor.length < 3) {
    console.log("valor inválido");
    usernameInput.classList.remove("correct");
    usernameInput.classList.add("error");
    usernameHelper.innerHTML = "Campo obrigatório";
    // if (valor.length === 0) {
    //   usernameHelper.innerHTML = "Campo obrigatório";
    // } else {
    //   usernameHelper.innerHTML = "Mínimo 3 caracteres";
    // }
    usernameHelper.classList.add("visible");
  } else {
    console.log("valor válido");
    usernameInput.classList.add("correct");
    usernameInput.classList.remove("error");
    usernameHelper.classList.remove("visible");
  }
}

// function validarUsername(evento) {
//   const valor = evento.target.value;
//   console.log(valor);
//   // console.log(usernameInput.value)

//   if (valor.length < 3) {
//     alert("valor inválido")
//   } else {
//     alert("valor válido")
//   }
// }

usernameInput.addEventListener("change", validarUsername);

//TESTES

// usernameInput.classList.add("correct")
// usernameLabel.classList.add("required-popup")
// usernameHelper.classList.add("visible")
// usernameHelper.innerText = "Nova mensagem"

// Validação do campos de email

const labelEmail = document.querySelector("label[for='email']");
const inputEmail = document.getElementById("email");
const helperEmail = document.getElementById("email-helper");

// console.log(labelEmail, inputEmail, helperEmail)

inputEmail.addEventListener("focus", function () {
  labelEmail.classList.add("required-popup");
});

inputEmail.addEventListener("blur", function () {
  labelEmail.classList.remove("required-popup");
});

inputEmail.addEventListener("change", function (evento) {
  const valor = evento.target.value;

  // const emailValido = valor.includes("@") &&
  // (valor.includes(".com") || valor.includes(".gov") || valor.includes(".dev") );

  // // if(valor.includes("@") && valor.includes(".com")){
  // //   // alert("email válido")

  // // } else {
  // //   // alert("email inválido")
  // // }

  // if (emailValido) {
  //   // alert("email válido")
  // } else {
  //   // alert("email inválido")
  // }

  if (valor.includes("@")) {
    // alert("email válido")
    inputEmail.classList.add("correct");
    inputEmail.classList.remove("error");
  } else {
    // alert("email inválido")
    inputEmail.classList.add("error");
    inputEmail.classList.remove("correct");
  }
});
