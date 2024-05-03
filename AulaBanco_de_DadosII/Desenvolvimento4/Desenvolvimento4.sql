-- Criando a tabela de clientes
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100),
    data_cadastro DATE
);

-- Inserindo alguns dados de exemplo na tabela de clientes
INSERT INTO clientes (nome, data_cadastro) VALUES
    ('Cliente 1', '2024-04-17'),
    ('Cliente 2', '2024-04-17'),
    ('Cliente 3', '2024-04-18'),
    ('Cliente 4', '2024-04-18'),
    ('Cliente 5', '2024-04-19');

-- Criando a função para somar clientes cadastrados em um dia específico
CREATE OR REPLACE FUNCTION somar_clientes_por_dia(data_pesquisa DATE)
RETURNS INTEGER AS
$$
DECLARE
    total_clientes INTEGER;
BEGIN
    SELECT COUNT(*) INTO total_clientes
    FROM clientes
    WHERE data_cadastro = data_pesquisa;

    RETURN total_clientes;
END;
$$ LANGUAGE plpgsql;

-- Exemplo de uso da função para somar clientes cadastrados em um dia específico
SELECT somar_clientes_por_dia('2024-04-17') AS total_clientes_17_abr;
