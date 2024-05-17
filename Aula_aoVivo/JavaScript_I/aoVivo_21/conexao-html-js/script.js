// console.log("Oi turma!")

const logo = document.getElementById("logo");
// console.log(document)
console.log(logo)

const autores = document.getElementsByClassName("post-autor");
// console.log(autores)
// console.log(autores[0])
// console.log(autores[0].innerText)
// console.log(autores[1])


// const segundoPost = document.querySelector("article")
// console.log(segundoPost)

// const segundoPost = document.querySelector("#post02 .post-autor")
// console.log(segundoPost)

const segundoPost = document.querySelector("#post02 .post-texto");
// console.log(segundoPost.innerText)

const listaRedes = document.querySelectorAll("footer .lista_redes li");
// console.log(segundoPost.innerText)
// console.log(listaRedes)
// console.log(listaRedes[0].innerText)
// console.log(listaRedes[1].innerText)
// console.log(listaRedes[2].innerText)

function mostrarConteudoElementos(elementos){
    
    for(let i; i < elementos.length; i++){
        // console.log("debugando");
        console.log(elementos[i].innerText);
    }
}

mostrarConteudoElementos(listaRedes);

// for(let index = 0; index < array.length; index++){
//     // console.log("debugando");
//     const element = array[index];
// }

mostrarConteudoElementos(autores);

function transformarEmArray(nodelist){

    const resultado = []
    
    for(let i; i < nodelist.length; i++){
        // console.log("debugando");
        resultado.push(nodelist[i]);
    }

    return resultado
}