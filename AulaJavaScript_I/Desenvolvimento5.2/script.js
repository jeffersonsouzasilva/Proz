//Acesse o site OneCompiler (link em anexo) e crie uma função que recebe dois números como parâmetros e imprime quatro frases no terminal (a partir de template strings) demonstrando as quatro operações básicas aplicadas a ambos números. 



function imprimirOperacoes(a, b) {
  console.log(`${a} + ${b} = ${a + b}`)
  console.log(`${a} - ${b} = ${a - b}`)
  console.log(`${a} x ${b} = ${a * b}`)
  console.log(`${a} / ${b} = ${a / b}`)
}

imprimirOperacoes(3,5);