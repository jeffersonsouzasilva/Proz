const quantidade_de_perguntas = 10;
let indices = [];

function gerar_numero_aleatorio(limite) {
    return Math.floor(Math.random() * limite);
}

function indice_ja_se_encontra(vetor, indice) {
    return vetor.includes(indice);
}

function embaralhar_vetor(v) {
    const tamanho = v.length;
    let indices = []
    while (indices.length < tamanho) {
        const valor = gerar_numero_aleatorio(tamanho);
        if (!indice_ja_se_encontra(indices, valor)) {
            indices.push(valor);
        }
    }
    let novo_vetor = [];

    for (let i = 0; i < tamanho; i++) {
        novo_vetor.push(v[indices[i]]);
    }
    return novo_vetor;
}

function gerar_ordem_das_perguntas() {
    while (indices.length < quantidade_de_perguntas) {
        const valor = gerar_numero_aleatorio(quantidade_de_perguntas);
        if (!indice_ja_se_encontra(indices, valor)) {
            indices.push(valor);
        }
    }
    return indices;
}

function dados_json(pergunta, resposta_Correta, todas_as_respostas) {
    const data = {
        "pergunta": pergunta,
        "resposta": resposta_Correta,
        "todas_as_respostas": embaralhar_vetor(todas_as_respostas)
    }
    return JSON.stringify(data);
}

function perguntas_e_respostas() {
    sessionStorage.setItem(0, dados_json(
        'Um século tem quantos anos?',
        100,
        [50, 100, 1000, 1500]
    ));
    sessionStorage.setItem(1, dados_json(
        'Que fruta é ressecada para se tornar uma ameixa seca?',
        'ameixa',
        ['Ameixa', 'Uva', 'Pêssego', 'Melão']
    ));
    sessionStorage.setItem(2, dados_json(
        'Quantas folhas tem um trevo da sorte?',
        'Quatro',
        ['Três', 'Quatro', 'Cinco', 'Seis']
    ))
    sessionStorage.setItem(3, dados_json(
        'O que é a Via Láctea?',
        'Galáxia',
        ['Marca de Leite', 'Civilização antiga', 'Marca de carro', 'Galáxia']
    ));
    sessionStorage.setItem(4, dados_json(
        'Que personagem da "turma do Chaves" vive cobrando o aluguel do Seu Madruga?',
        'Seu Barriga',
        ['Kiko', 'Chaves', 'Seu Barriga', 'Professor Girafales']
    ));
    sessionStorage.setItem(5, dados_json(
        'Que personagem da série "Chaves" é o pai da chiquinha?',
        'Seu Madruga',
        ['Nhonho', 'Seu Madruga', 'Seu Barriga', 'Professor Girafales']
    ));
    sessionStorage.setItem(6, dados_json(
        'Que personagem dos quadrinhos usa um coelho como arma e tem dentes grandes?',
        'Mônica',
        ['Magali', 'Cebolinha', 'Cascão', 'Mônica']
    ));
    sessionStorage.setItem(7, dados_json(
        'Que objeto usado na chuva o Pinguim do Batman usa como arma?',
        'Guarda-chuva',
        ['Guarda-chuva', 'Chapéu', 'Galocha', 'Capa']
    ));
    sessionStorage.setItem(8, dados_json(
        'Qual a profissão dos Sete Anões?',
        'Mineiros',
        ['Mineiros', 'Lenhadores', 'Agricultores', 'Pastores']
    ));
    sessionStorage.setItem(9, dados_json(
        'Quantos centavos tem um real?',
        'Cem',
        ['Dez', 'Mil', 'Cem', 'Cinquenta']
    ));
}

function configuracao_inicial() {
    perguntas_e_respostas();
    gerar_ordem_das_perguntas();
    sessionStorage.setItem('indices', JSON.stringify(indices));
}

configuracao_inicial();