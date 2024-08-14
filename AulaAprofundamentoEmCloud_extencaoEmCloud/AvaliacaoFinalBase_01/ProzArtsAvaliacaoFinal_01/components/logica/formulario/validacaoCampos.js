/**
 * 
 * @param {String} e - só pode conter de a - z, A - Z e " "
 * @returns {boolean} - Retorna verdadeiro se o nome de usuário for válido, falso caso contrário.
 */
function validacao_input_nome_de_usuario(e) {
  const exprRegular =
    new RegExp(/^[a-zA-Z ]+$/, 'g');
  return exprRegular.test(e);
}

/**
 * 
 * @param {string} e 
 * @returns {boolean} - Retorna verdadeiro se o email for válido, falso caso contrário.
 */
function validacao_input_email(e) {
  const exprRegular =
    new RegExp(/^[a-zA-Z0-9][a-zA-Z0-9._]+@((gmail)|(hotmail)|(outlook)).com$/, 'g');

  return exprRegular.test(e);
}

/**
 * 
 * @param {String} e - A data em formato de string "aaaa-mm-dd".
 * @returns {Boolean} - Retorna verdadeiro se a data for válida, falso caso contrário.
 */
function validacao_data(e) {
  const data = e.split("-")
  const dia = data[2]; const mes = data[1]; const ano = data[0]

  const dia_correto = dia > 0 && dia < 32;
  const mes_correto = mes > 0 && mes < 13;
  const ano_correto = ano > 1900 && ano < (new Date(Date.now()).getFullYear() - 6)

  //console.log(dia_correto + " " + mes_correto + " " + ano_correto)
  return dia_correto && mes_correto && ano_correto;
}

/**
 * 
 * @param {string} e - aceita apenas os caracteres [a-zA-Z0-9] e caracteres especiais como [@#$&%-_].
 * @returns 
 */
function validacao_senha(e) {
  const exprRegular =
    new RegExp(/^[a-zA-Z0-9/@/#/$/&/%/-/_]+$/, 'g');
  return exprRegular.test(e);
}
console.log("nao funca " + validacao_senha("..,.,.,.,."))