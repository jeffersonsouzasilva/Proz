const uriLogin = () => { window.location.href = localizacao_da_raiz() + "pages/login/index.html" };

const montarLogo = () => {
  const uriHome = localizacao_da_raiz() + "index.html";
  const logo = document.createElement("h1")
  logo.innerHTML = `<a href="${uriHome}">Proz Arts</a>`
  return logo
}

const montarMenuBar = () => {
  const uriSobre = localizacao_da_raiz() + "pages/sobre/index.html";
  const uriCompromisso = localizacao_da_raiz() + "pages/compromissos/index.html";
  const uriJogos = localizacao_da_raiz() + "pages/jogos/index.html";
  const uriComunidade = localizacao_da_raiz() + "pages/comunidade/index.html";
  const nav = document.createElement("nav")

  const links_das_paginas = document.createElement("ul")
  links_das_paginas.id = "links-pages"
  links_das_paginas.innerHTML = `
    <li><a href="${uriSobre}">Sobre</a></li>
    <li><a href="${uriCompromisso}">Compromisso</a></li>
    <li><a href="${uriJogos}">Jogos</a></li>
    <li><a href="${uriComunidade}">Comunidade</a></li>
  `
  //para mobile
  const iFontAewsome = document.createElement("i")
  iFontAewsome.classList.add("fa-solid")
  iFontAewsome.classList.add("fa-bars")
  iFontAewsome.id = "icon-menu-mobile"
  const div_mobile = document.createElement("div")
  div_mobile.id = "opcoes-para-menu-mobile"
  div_mobile.appendChild(iFontAewsome)
  div_mobile.appendChild(links_das_paginas)
  nav.appendChild(div_mobile)

  const btn_login = document.createElement("button")
  btn_login.onclick = uriLogin
  btn_login.innerText = "LOGIN"
  nav.appendChild(btn_login)

  return nav
}

function montarHeader() {
  const header = document.querySelector("header");
  header.appendChild(montarLogo())
  header.appendChild(montarMenuBar())
}

montarHeader()