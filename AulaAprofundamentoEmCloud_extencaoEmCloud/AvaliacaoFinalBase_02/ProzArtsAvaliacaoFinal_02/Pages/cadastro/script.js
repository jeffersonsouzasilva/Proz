//inputs
const input_nome_usuario = document.getElementById("nome_usuario")
const input_email = document.getElementById("email")
const input_confirmar_email = document.getElementById("confirmar_email")
const input_dt_nasc = document.getElementById("data_nascimento")
const input_Senha = document.getElementById("senha")
const input_repete_Senha = document.getElementById("repete_senha")
const input_termo_de_uso = document.getElementById("termos_check")
const input_aceitar_conteudos_extras = document.getElementById("conteudo_check")
//msg de erro
const msg_erro_nome_usuario = document.getElementById("error-nome-usuario")
const msg_erro_email = document.getElementById("error-email")
const msg_erro_confirmar_email = document.getElementById("error-confirmar-email")
const msg_erro_dt_nascimento = document.getElementById("error-dt-nascimento")
const msg_erro_Senha = document.getElementById("error-senha")
const msg_erro_repete_senha = document.getElementById("error-repetir-senha")
const msg_erro_termo_de_uso = document.getElementById("error-termo-de-uso");
//formulario
const form = document.querySelector("form")
const btn_submit = document.getElementById("enviar_forms")

//status de todos os campos
const status_input = {
  nome: false,
  email: false,
  dt_nascimento: false,
  senha: false
}

/**
 * @returns(boolean) se todos os campos foram preenchidos corretamente
 */
function verificar_campos_preenchidos() {
  if (!(status_input.dt_nascimento && status_input.email && status_input.nome && status_input.senha)) {
    return false
  } else {
    return true
  }
}

/**
 * Altera o status do botão de enviar formulario
 */
function validar_ativacao_do_botao() {
  if (!verificar_campos_preenchidos()) {
    btn_submit.disabled = "true"
  } else {
    btn_submit.removeAttribute("disabled")
  }
}

/**
 * 
 * @param {HTMLInputElement} input 
 * @param {HTMLInputElement} label 
 * @param {String} mensagem 
 */
function campoErrado(input, label, mensagem) {
  if (!input.classList.contains("campo-errado")) {
    input.classList.add("campo-errado");
    label.style.display = "block";
  }
  label.innerText = mensagem;
}

/**
 * 
 * @param {HTMLInputElement} input 
 * @param {HTMLInputElement} label 
 */
function campoNeutro(input, label) {
  if (input.classList.contains("campo-errado")) {
    input.classList.remove("campo-errado");
    label.style.display = "none";
  }
}

/**
 * 
 * @param {HTMLInputElement} input 
 * @param {HTMLInputElement} label 
 */
function toggleCampoObrigatorio(input, label) {
  input.addEventListener("blur", (e) => {
    if (e.target.value == "")
      campoErrado(e.target, label, "campo obrigatório.")

    validar_ativacao_do_botao()
  })
}

/**
 * 
 * @param {function} confirmarSintaxe funcção que verifica a sintaxe do campo
 * @param {string} msgErroSintaxe mensagem indicando que a sintaxe do campo está incorreta
 * @param {HTMLInputElement} input 
 * @param {HTMLLabelElement} label 
 * @param {function} inputCorreto função executada quando o input estiver correto
 * @param {function} inputIncorreto função executada quando o input estiver incorreto
 */
function toggleCamposDiferentes(confirmarSintaxe, msgErroSintaxe, input, label, inputCorreto, inputIncorreto) {
  input.addEventListener("change", (e) => {
    if (e.target.value == "") return;
    if (confirmarSintaxe != null) {
      if (!confirmarSintaxe(e.target.value)) {
        campoErrado(input, label, msgErroSintaxe);
        inputIncorreto()
        return;
      }
    }

    campoNeutro(input, label);
    inputCorreto();
    validar_ativacao_do_botao()
  })
}

/**
 * 
 * @param {?function} confirmarSintaxe funcção que verifica a sintaxe do campo
 * @param {?string} msgErroSintaxe mensagem indicando que a sintaxe do campo está incorreta
 * @param {HTMLInputElement} inputA campo 1 do formulário
 * @param {HTMLInputElement} inputB campo 2 do formulário
 * @param {HTMLLabelElement} labelA label vinculado ao campo 1 do formulário
 * @param {HTMLLabelElement} labelB label vinculado ao campo 2 do formulário
 * @param {string} msgErroCamposIguais 
 * @param {function} inputsCorretos função executada quando os inputs estiverem corretos
 * @param {function} inputsIncorretos função executada quando os inputs estiverem errados
 */
function toggleCamposIguais(confirmarSintaxe, msgErroSintaxe, inputA, inputB, labelA, labelB, msgErroCamposIguais, inputsCorretos, inputsIncorretos) {
  inputA.addEventListener("change", (e) => {
    if (e.target.value == "") return;

    if (confirmarSintaxe != null) {
      if (!confirmarSintaxe(e.target.value)) {
        campoErrado(inputA, labelA, msgErroSintaxe);
        inputsIncorretos()
        return;
      }
    }
    if (e.target.value != inputB.value) {
      if (inputB.value != "") {
        campoErrado(inputA, labelA, msgErroCamposIguais);
        campoErrado(inputB, labelB, msgErroCamposIguais);
        inputsIncorretos()
      } else {
        campoNeutro(inputA, labelA);
        campoNeutro(inputB, labelB);
        validar_ativacao_do_botao();
      }
    } else {
      campoNeutro(inputA, labelA);
      campoNeutro(inputB, labelB);
      inputsCorretos();
      validar_ativacao_do_botao();
    }
  })

  inputB.addEventListener("change", (e) => {
    if (e.target.value == "") return;
    if (confirmarSintaxe != null) {
      if (!confirmarSintaxe(e.target.value)) {
        campoErrado(inputB, labelB, msgErroSintaxe);
        inputsIncorretos()
        return;
      }
    }
    if (e.target.value != inputA.value) {
      if (inputA.value != "") {
        campoErrado(inputA, labelA, msgErroCamposIguais);
        campoErrado(inputB, labelB, msgErroCamposIguais);
        inputsIncorretos()
      } else {
        campoNeutro(inputA, labelA);
        campoNeutro(inputB, labelB);
        validar_ativacao_do_botao();
      }
    } else {
      campoNeutro(inputA, labelA);
      campoNeutro(inputB, labelB);
      inputsCorretos();
      validar_ativacao_do_botao();
    }
  })
}

// fazendo a verificação do campo obrigatório
toggleCampoObrigatorio(input_nome_usuario, msg_erro_nome_usuario);
toggleCampoObrigatorio(input_email, msg_erro_email);
toggleCampoObrigatorio(input_confirmar_email, msg_erro_confirmar_email);
toggleCampoObrigatorio(input_dt_nasc, msg_erro_dt_nascimento);
toggleCampoObrigatorio(input_Senha, msg_erro_Senha);
toggleCampoObrigatorio(input_repete_Senha, msg_erro_repete_senha);

// fazendo a verificação de campos independentes
toggleCamposDiferentes(
  validacao_input_nome_de_usuario, "nome de usuário invalido",
  input_nome_usuario, msg_erro_nome_usuario,
  () => { status_input.nome = true }, () => { status_input.nome = false }
)
toggleCamposDiferentes(
  validacao_data, "data inválida",
  input_dt_nasc, msg_erro_dt_nascimento,
  () => { status_input.dt_nascimento = true }, () => { status_input.dt_nascimento = false }
)

// fazendo a verificação de campos iguais
toggleCamposIguais(validacao_input_email, "email inválido",
  input_email, input_confirmar_email,
  msg_erro_email, msg_erro_confirmar_email,
  "Email incorreto. Só é permitido gmail,hotmail ou outlook.",
  () => { status_input.email = true }, () => { status_input.email = false }
)
toggleCamposIguais(
  validacao_senha, "senha inválida",
  input_Senha, input_repete_Senha,
  msg_erro_Senha, msg_erro_repete_senha,
  "as senhas são diferentes.",
  () => { status_input.senha = true }, () => { status_input.senha = false }
)

/**
 * 
 * @returns {boolean} true os campos de senha e email estão corretos, além do usuário ter aceitado o termo e falso caso contrário
 */
function validar_campos_de_confirmacao() {

  if (input_termo_de_uso.checked) {
    if (msg_erro_termo_de_uso.style.display === "block") msg_erro_termo_de_uso.style.display = "none"
  }

  validar_ativacao_do_botao()
  return input_termo_de_uso.checked;
}

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (validar_campos_de_confirmacao()) {
    const data = input_dt_nasc.value.split("-")
    cadastro_usuario(input_nome_usuario.value, input_email.value, new Date(data[0], data[1], data[2]), input_Senha.value, input_aceitar_conteudos_extras.checked);
    exibir_mensagem_pupup("Mensagem do sistema", "Cadastro efetuado com sucesso", 4000)
    setTimeout(() => {
      window.location.href = localizacao_da_raiz() + "index.html"
    }, 4100);
  } else
    msg_erro_termo_de_uso.style.display = "block"
})