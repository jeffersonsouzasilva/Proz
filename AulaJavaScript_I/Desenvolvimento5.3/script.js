// Crie um projeto com dois arquivos: index.html e script.js. No arquivo 'index' insira apenas a estrutura base HTML e a tag script para conectar o arquivo HTML com o arquivo de extensão JavaScript.

// Usando os conceitos aprendidos nesse módulo, e sem alterar o arquivo index.html, adicione um título simples ao site com o id 'titulo', e um elemento que represente um produto à venda. O produto precisa incluir pelo menos o nome, a descrição e o preço. Pode incluir outros "elementos filhos" se achar necessário como, por exemplo, uma imagem. Procure usar o método simples e o método complexo, ensinados neste tópico.



let titulo = document.createElement("h1");
let body = document.querySelector("body");
let produto = document.createElement("div");


titulo.id = "titulo";
titulo.innerText = "Mercado do Zé";

body.appendChild(titulo);

produto.innerHTML = `
  <div>
    <h2>Refrigerante</h2>
    <img src="https://c.pxhere.com/images/90/3b/238574e95c40713183869cc5b35f-1677874.jpg!d" srcset="https://c.pxhere.com/images/90/3b/238574e95c40713183869cc5b35f-1677874.jpg!d" alt="lata refrigerante de Coca-cola">
    <p>Lata refrigerante Coca-cola.</p>
    <p id="preco-refrigerante">R$ 3.90</p>
  </div>
`;

body.appendChild(produto)