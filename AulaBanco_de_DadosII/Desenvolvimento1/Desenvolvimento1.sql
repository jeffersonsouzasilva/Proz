CREATE DATABASE biblioteca;

USE biblioteca;

CREATE TABLE autores (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    nacionalidade VARCHAR(50)
);

CREATE TABLE editoras (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(200)
);

CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    ano_publicacao INTEGER,
    autor_id INTEGER,
    editora_id INTEGER,
    FOREIGN KEY (autor_id) REFERENCES autores(id),
    FOREIGN KEY (editora_id) REFERENCES editoras(id)
);


-- Inserir autores
INSERT INTO autores (nome, nacionalidade) VALUES
('Machado de Assis', 'Brasileiro'),
('Clarice Lispector', 'Brasileira'),
('Gabriel García Márquez', 'Colombiano');

-- Inserir editoras
INSERT INTO editoras (nome, endereco) VALUES
('Companhia das Letras', 'São Paulo, Brasil'),
('Random House', 'Nova York, EUA'),
('Penguin Books', 'Londres, Reino Unido');

-- Inserir livros
INSERT INTO livros (titulo, ano_publicacao, autor_id, editora_id) VALUES
('Dom Casmurro', 1899, 1, 1),
('A Hora da Estrela', 1977, 2, 1),
('Cem Anos de Solidão', 1967, 3, 2);


-- Consulta para listar todos os livros com seus autores e editoras
SELECT livros.titulo, autores.nome AS autor, editoras.nome AS editora
FROM livros
JOIN autores ON livros.autor_id = autores.id
JOIN editoras ON livros.editora_id = editoras.id;

-- Consulta para encontrar livros publicados por uma editora específica
SELECT livros.titulo, autores.nome AS autor
FROM livros
JOIN autores ON livros.autor_id = autores.id
JOIN editoras ON livros.editora_id = editoras.id
WHERE editoras.nome = 'Companhia das Letras';


