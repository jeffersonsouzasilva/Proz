-- Criação da tabela "vendas"
CREATE TABLE vendas (
    id SERIAL PRIMARY KEY,
    data_compra DATE,
    quantidade INTEGER
);

-- Inserção de alguns dados de exemplo na tabela "vendas"
INSERT INTO vendas (data_compra, quantidade) VALUES
    ('2024-04-01', 10),
    ('2024-04-01', 15),
    ('2024-04-02', 20),
    ('2024-04-02', 25),
    ('2024-04-03', 30);

-- Criação da função calcular_quantidade_vendas_por_dia()
CREATE OR REPLACE FUNCTION calcular_quantidade_vendas_por_dia()
RETURNS TABLE(data_compra DATE, quantidade_total INTEGER) AS
$$
BEGIN
    RETURN QUERY
    SELECT data_compra::DATE, SUM(quantidade) AS quantidade_total
    FROM vendas
    GROUP BY data_compra::DATE
    ORDER BY data_compra::DATE;
END;
$$ LANGUAGE plpgsql;

-- Execução da função para obter o relatório de vendas por dia
SELECT * FROM calcular_quantidade_vendas_por_dia();
