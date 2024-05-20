// alert()
const h2 = document.querySelector("h2")
// h2.style.color = "red"
// h2.style.fontSize = "100px" // propriedade do CSS: font-size

h2.style.color = "blue"
h2.style.fontSize = "50px" // propriedade do CSS: font-size

// o usuário digitou um nome inválido
const username = document.querySelector("#login-usuario")
// username.style.backgroundColor = "red"
username.classList.add("error")
// username.style.border = "solid red"

const errorText = document.querySelector(".error-text")
errorText.classList.add("visible")

// const form = document.querySelector("form")
// form.style.display = "none"


//o usuário corrigiu o nome, mas digitou uma senha inválida /min 1:01:23