// Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira a estrutura base HTML e dentro da tag 'body' inclua quatro tags vazias: h1, ul, a, ol. Adicione o atributo id="titulo" à tag h1, o atributo href="https://prozeducacao.com.br" à tag 'a', e o atributo id="lista-ordenada" à tag 'ol'. Na sequência, realize a conexão entre o arquivo HTML e o arquivo JavaScript.

// No arquivo script.js capture os quatro elementos criados, e use a propriedade .innerText para adicionar conteúdo textual aos elementos 'h1' e 'a', e a propriedade .innerHTML para adicionar três itens simples na lista não ordenada, e três itens com links para outros sites na lista ordenada.  


let titulo = document.getElementById('titulo')
let link = document.querySelector('a');
let listaNaoOrdenada = document.querySelector('ul')
let listaOrdenada = document.querySelector('ol')


titulo.innerText = 'Frutas'
link.innerText = 'Site da Proz'

listaNaoOrdenada.innerHTML = `
  <li>Morango</li>
  <li>Laranja</li>
  <li>Tomate</li>
`

listaOrdenada.innerHTML = `
  <li><a href="https://google.com.br">Google</a></li>
  <li><a href="https://youtube.com.br">Youtube</a></li>
  <li><a href="https://geekhunter.com.br">Geek Hunter</a></li>
`