//FUNÇÕES GLOBAIS CONTENDO ALGUMA LÓGICA OU REGRA DE NEGÓCIO

/**
 * Usado para retornar a URL atual
 * @returns String
 */
function urlLocal() {
  return window.location.href
}

/**
 * Usado para retornar o URI local
 * @returns String
 */
function uriLocal() {
  const urlLocal = window.location.href

  let array_caminho = urlLocal.split("/")

  //procurar a raiz do site
  let i = 0
  for (i = 0; i < array_caminho.length; i++) {
    if (array_caminho[i] === "code") break;
  }

  //concatenar o restante do vetor
  i += 1; let str = ""
  for (j = i; j < array_caminho.length; j++) {
    if (j < array_caminho.length && j !== i) {
      str += "/"
    }

    str += array_caminho[j]
  }

  return str;
}

/**
 * Usado para retornar a profundidade do arquivo index.html com relação a raiz do projeto (Site)
 * @returns Inteiro
 */
function profundidade() {
  return uriLocal().split("/").length - 1
}

/**
 * Usado para retornar a localização do diretorio raiz do projeto html
 * @returns String
 */
function localizacao_da_raiz() {
  const url_local = urlLocal()

  const vetor = url_local.split("/")

  let url_base = ""
  for (let i in vetor) {
    url_base += vetor[i] + "/"
    if (vetor[i] === "code") {
      return url_base;
    }
  }
}

//-----------------------------------------------------------------------------------------------------
function cadastro_usuario(nome, email, data_nascimento, senha, assinar_novidades) {
  const usuario = {
    nome: nome,
    email: email,
    data_nascimento: data_nascimento,
    senha: senha,
    quer_ver_novidades: assinar_novidades
  }

  let lista_usuarios = sessionStorage.getItem("usuarios")
  if (lista_usuarios === undefined || lista_usuarios === null) {
    const lista_usuarios = [usuario]
    sessionStorage.setItem("usuarios", JSON.stringify(lista_usuarios))
  } else {
    lista_usuarios = JSON.parse(lista_usuarios);
    lista_usuarios.push(usuario)
    sessionStorage.setItem("usuarios", JSON.stringify(lista_usuarios))
  }
}