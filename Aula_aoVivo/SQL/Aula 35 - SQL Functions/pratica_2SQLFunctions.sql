CREATE TABLE produto(
  ID SERIAL PRIMARY KEY,
  nome VARCHAR(16) NOT NULL UNIQUE,
  preco FLOAT NOT NULL
);

INSERT INTO produto(nome, preco) VALUES
	('Bicicleta', 789.90),
	('Patins', 234.50),
    ('Scooter', 450.00);
    
CREATE FUNCTION aplicar_desconto (preco_antigo FLOAT, desconto FLOAT)
	RETURNS FLOAT AS
    $$
    BEGIN
    	RETURN preco_antigo - desconto * preco_antigo;
    END
    $$
    LANGUAGE PLPGSQL;
    
SELECT aplicar_desconto (450, 0.1)


SELECT *, aplicar_desconto(preco, 0.1) FROM produto;


SELECT 
	ID,
    nome,
    preco AS preco_sem_desconto,
    aplicar_desconto(preco, 0.1) 
FROM produto;


SELECT 
	ID,
    nome,
    preco AS preco_antigo,
    aplicar_desconto(preco, 0.1) AS preco_com_desconto
FROM produto;