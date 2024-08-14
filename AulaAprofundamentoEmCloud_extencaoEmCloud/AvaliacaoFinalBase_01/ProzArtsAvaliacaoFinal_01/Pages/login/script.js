const $ = document.querySelector.bind(document);

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('submit');
// }); //Estrutura usada para montar a constante

$('#email').addEventListener('focus', (e) => {
  validacao.limparAvisoErro('#email', '#erroEmail');
});

$('#senha').addEventListener('focus', (e) => {
  validacao.limparAvisoErro('#senha', '#erroSenha');
});

$('#senha').addEventListener('input', (e) => {
  console.log(e.target.value)
  validacao.minCaracteres('#senha', '#erroSenha', 4);
});// aqui começo a não exibir comportamento requirido

$('form').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('submit');

  const temValorEmail = validacao.temValor(
    '#email',
    '#erroEmail',
    'E-mail obrigatório'
  );
  if (!temValorEmail) {
    return;
  }

  const temValorSenha = validacao.temValor(
    '#senha',
    '#erroSenha',
    'Senha obrigatória'
  );
  if (!temValorSenha) {
    return;
  }

  //   if (!$('#email').value) {
  //     $('#erroEmail').innerText = 'E-mail obrigatório';
  //     $('#erroEmail').classList.toggle('exibir');
  //     $('#email').classList.toggle('bg-erro');
  //     return;
  //   }
  exibir_mensagem_pupup("Mensagem do sistema", "Login realizado com sucesso!", 3000)
  setTimeout(() => {
    window.location.href = localizacao_da_raiz() + "index.html"
  }, 3000);
});

const validacao = {
  temValor: function (el, elExibirMsg, msg) {
    if (!$(el).value) {
      $(el).classList.toggle('bg-erro');
      $(elExibirMsg).innerText = msg;
      $(elExibirMsg).classList.toggle('exibir');
      return false;
    }
    return true;
  },
  minCaracteres: function (el, elExibirMsg, qtdCaracteres) {
    if ($(el).value.length < qtdCaracteres) {
      $(el).classList.add('bg-erro');
      $(elExibirMsg).innerText =
        `Mínimo de ${qtdCaracteres} caracteres`;
      $(elExibirMsg).classList.add('exibir');
    } else {
      // $(el).classList.remove('bg-erro');
      // $(elExibirMsg).classList.remove('exibir');
      this.limparAvisoErro(el, elExibirMsg);
    }
  },
  limparAvisoErro: function (el, elExibirMsg) {
    $(el).classList.remove('bg-erro');
    $(elExibirMsg).classList.remove('exibir');
  }
}
