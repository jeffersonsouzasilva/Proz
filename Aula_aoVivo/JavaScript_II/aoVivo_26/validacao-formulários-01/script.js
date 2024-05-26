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
function ocultarPopup(){
    usernameLabel.classList.remover("required-popup")
}


usernameInput.addEventListener("blur", ocultarPopup)

// Validar valor do input

//testes
// usernameInput.classList.add("correct")
// usernameLabel.classList.add("required-popup")
// usernameHelper.classList.add("visible")
// usernameHelper.innerText = "Nova mensagem"
