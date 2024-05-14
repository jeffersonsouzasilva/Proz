--Crie e teste uma função que receba dois números e retorne sua soma
CREATE FUNCTION somar (primeiro_numero FLOAT, segundo_numero FLOAT )
	RETURNS FLOAT AS
	$$
	BEGIN
		RETURN primeiro_numero + segundo_numero;
	END
	$$
	LANGUAGE PLPGSQL;
SELECT * FROM demo;

SELECT somar(20.10, -50);

CREATE FUNCTION dividir (dividendo FLOAT, divisor FLOAT )
	RETURNS FLOAT AS
    $$
    BEGIN
    	if divisor = 0 THEN
        	RETURN NULL;
        ELSE
    		RETURN dividendo / divisor;
        END IF;
    END
    $$
    LANGUAGE PLPGSQL;

DROP FUNCTION dividir;

CREATE OR REPLACE FUNCTION dividir (dividendo FLOAT, divisor FLOAT )
	RETURNS FLOAT AS
    $$
    BEGIN
    	if divisor = 0 THEN
        	RETURN NULL;
        ELSE
    		RETURN dividendo / divisor;
        END IF;
    END
    $$
    LANGUAGE PLPGSQL;

SELECT dividir(14, 0);