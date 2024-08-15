/**
 * 
 * @param {*} titulo 
 * @param {*} descricao 
 * @param {*} tempo_duracao 
 * @param {?boolean} confirmado 
 */
function exibir_mensagem_pupup(titulo, descricao, tempo_duracao, confirmado) {
  const criar_component = () => {
    const area = document.createElement("div");
    area.id = "msg-popup"
    area.innerHTML = `
      <h1>${titulo}</h1>
      <p>${descricao}</p>
    `

    const tudo = document.createElement("section")
    tudo.id = "component-msg-popup"
    tudo.appendChild(area)
    return tudo;
  }
  document.querySelector("body").appendChild(criar_component());

  const popup = document.getElementById("component-msg-popup")
  popup.style.display = "flex"

  if (confirmado) {
    function ocultarPopup() {
      popup.style.display = "none"
    }

    const areaBtn = document.createElement("div")
    const btn = document.createElement("button")
    btn.id = "confirmado"
    btn.innerText = "confirmar"
    btn.addEventListener("click", ocultarPopup)
    areaBtn.appendChild(btn)

    const areaContent = document.querySelector("#component-msg-popup  #msg-popup")
    areaContent.appendChild(areaBtn)
  } else {
    setTimeout(() => {
      popup.style.display = "none"
    }, tempo_duracao);
  }

}