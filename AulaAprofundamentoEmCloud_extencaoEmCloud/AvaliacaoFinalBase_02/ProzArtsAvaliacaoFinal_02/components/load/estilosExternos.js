//links externos
/**
 * cada indice representa o rel + url. Cada linha tem duas colunas com cada coluna sendo um rel e outro a url
 */
const links_externos_do_head = [
  { rel: "stylesheet", href: 'https://use.fontawesome.com/releases/v6.5.1/css/all.css' }
]

function carregarGlobalConfigs() {
  const head = document.querySelector("head")
  let link_externo_de_estilos = document.createElement("link")

  for (i in links_externos_do_head) {
    link_externo_de_estilos.rel = links_externos_do_head[i].rel
    link_externo_de_estilos.href = links_externos_do_head[i].href
    head.appendChild(link_externo_de_estilos)
  }
}

carregarGlobalConfigs()