CREATE database BD_prozArts;

USE BD_prozArts;

DROP DATABASE BD_prozArts;


-- Tabelas --
CREATE TABLE comunidade(
  id SERIAL PRIMARY KEY NOT NULL,
  nome VARCHAR(500),
  servidor VARCHAR(20)
);

CREATE TABLE servidor(
  id SERIAL PRIMARY KEY NOT NULL,
  comunidade_ID INTEGER NOT NULL,
  nome VARCHAR(24) NOT NULL,
  link VARCHAR(100) NOT NULL,
  capa VARCHAR(100) NOT NULL,
  FOREIGN KEY (comunidade_ID) REFERENCES comunidade(id)
);

CREATE TABLE forum(
  id SERIAL PRIMARY KEY NOT NULL,
  comunidade_ID INTEGER NOT NULL,
  nome VARCHAR(50) NOT NULL,
  descricao VARCHAR(500),
  capa VARCHAR(100),
  FOREIGN KEY (comunidade_ID) REFERENCES comunidade(id)
);



-- Dados para a tabela comunidade --
INSERT INTO comunidade (nome, servidor) 
VALUES ('Comunidade Gamer', 'Discord'),
       ('Comunidade de Programadores', 'Slack'),
       ('Comunidade de Música', 'WhatsApp');

-- Dados para a tabela servidor  --
INSERT INTO servidor (comunidade_ID, nome, link, capa)
VALUES (1, 'Servidot Gamer', 'https://discord.com/', 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01-black.png'),
       (2, 'Servidor de Dev', 'https://slack.com/', 'https://a.slack-edge.com/production-standard-emoji-assets/13.1/google-medium/1f4bb.png'),
       (3, 'Servidor de Música', 'https://web.whatsapp.com/', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png');

-- Dados para a tabela forum  --
INSERT INTO forum (comunidade_ID, nome, descricao, capa)
VALUES (1, 'Fórum Gamer', 'Discussões sobre jogos e consoles.', 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01-black.png'),
       (2, 'Fórum de Programação', 'Discussões sobre linguagens de programação e desenvolvimento de software.', 'https://a.slack-edge.com/production-standard-emoji-assets/13.1/google-medium/1f4bb.png'),
       (3, 'Fórum de Música', 'Discussões sobre artistas, álbuns e gêneros musicais.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png');
       
       
   
   
   
-- Consulta simples  
SELECT * FROM comunidade;

SELECT * FROM servidor;

SELECT * FROM forum;

SELECT nome, servidor FROM comunidade;

SELECT nome, link FROM servidor;

SELECT nome, descricao FROM forum;



-- Consulta com duas tabelas --
SELECT c.nome AS comunidade_nome, s.nome AS servidor_nome, s.link
FROM comunidade c
JOIN servidor s ON c.id = s.comunidade_ID;


SELECT c.nome AS comunidade_nome, f.nome AS forum_nome, f.descricao
FROM comunidade c
JOIN forum f ON c.id = f.comunidade_ID;


SELECT f.nome AS nome_forum, f.descricao, s.nome AS nome_servidor
FROM forum f
JOIN servidor s ON f.comunidade_id = s.comunidade_id;