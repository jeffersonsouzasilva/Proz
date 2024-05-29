CREATE database BD_prozArts;

USE BD_prozArts;

DROP DATABASE BD_prozArts;

CREATE TABLE usuarios(
  id SERIAL PRIMARY KEY NOT NULL,
  biblioteca_ID INTEGER NOT NULL,
  nome VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  senha VARCHAR(50) NOT NULL,
  data_nascimento DATE NOT NULL,
  plataforma VARCHAR(50) NOT NULL,
  FOREIGN KEY (biblioteca_ID) REFERENCES biblioteca(ID)
);


CREATE TABLE usuarioAssinaNoticia(
  noticia_ID INTEGER NOT NULL,
  usuario_ID INTEGER NOT NULL,
  PRIMARY KEY (noticia_ID, usuario_ID),
  FOREIGN KEY (noticia_ID) REFERENCES noticia(ID),
  FOREIGN KEY (usuario_ID) REFERENCES usuarios(id)
);


CREATE TABLE noticia(
  ID SERIAL PRIMARY KEY NOT NULL,
  dt_criacao DATE NOT NULL,
  descricao VARCHAR(500) NOT NULL
);


CREATE TABLE biblioteca_tem_noticia(
  biblioteca_ID INTEGER NOT NULL,
  noticia_ID INTEGER NOT NULL,
  PRIMARY KEY (biblioteca_ID, noticia_ID),
  FOREIGN KEY (biblioteca_ID) REFERENCES biblioteca(ID),
  FOREIGN KEY (noticia_ID) REFERENCES noticia(ID)
);


CREATE TABLE biblioteca(
  ID SERIAL PRIMARY KEY NOT NULL,
  preferencias VARCHAR(20)
);

CREATE TABLE meusJogos(
  biblioteca_ID INTEGER NOT NULL,
  jogos_ID INTEGER NOT NULL,
  PRIMARY KEY (biblioteca_ID, jogos_ID),
  FOREIGN KEY (biblioteca_ID) REFERENCES biblioteca(ID),
  FOREIGN KEY (jogos_ID) REFERENCES jogos(id)
);


CREATE TABLE jogos(
  id SERIAL PRIMARY KEY NOT NULL,
  nome VARCHAR(50),
  categoria VARCHAR(24),
  link VARCHAR(100),
  capa VARCHAR(100)
);


CREATE TABLE jogos_para_plataforma(
  plataforma_ID INTEGER NOT NULL,
  jogos_ID INTEGER NOT NULL,
  PRIMARY KEY (plataforma_ID, jogos_ID),
  FOREIGN KEY (plataforma_ID) REFERENCES plataforma(id),
  FOREIGN KEY (jogos_ID) REFERENCES jogos(id)
);


CREATE TABLE plataforma(
  id SERIAL PRIMARY KEY NOT NULL,
  pc VARCHAR(5),
  xbox VARCHAR(50),
  playstation VARCHAR(15),
  NintendoSwitch VARCHAR(15),
  nintendoWii VARCHAR(15),
  mobile VARCHAR(15)
);

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

-- Dados para a tabela comunidade
INSERT INTO comunidade (nome, servidor) 
VALUES ('Comunidade Gamer', 'Discord'),
       ('Comunidade de Programadores', 'Slack'),
       ('Comunidade de Música', 'WhatsApp');

-- Dados para a tabela servidor
INSERT INTO servidor (comunidade_ID, nome, link, capa)
VALUES (1, 'Servidor Gamer', 'https://discord.com/', 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01-black.png'),
       (2, 'Servidor de Programadores', 'https://slack.com/', 'https://a.slack-edge.com/production-standard-emoji-assets/13.1/google-medium/1f4bb.png'),
       (3, 'Servidor de Música', 'https://web.whatsapp.com/', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png');

-- Dados para a tabela forum
INSERT INTO forum (comunidade_ID, nome, descricao, capa)
VALUES (1, 'Fórum Gamer', 'Discussões sobre jogos e consoles.', 'https://logodownload.org/wp-content/uploads/2017/11/discord-logo-01-black.png'),
       (2, 'Fórum de Programação', 'Discussões sobre linguagens de programação e desenvolvimento de software.', 'https://a.slack-edge.com/production-standard-emoji-assets/13.1/google-medium/1f4bb.png'),
       (3, 'Fórum de Música', 'Discussões sobre artistas, álbuns e gêneros musicais.', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/598px-WhatsApp.svg.png');