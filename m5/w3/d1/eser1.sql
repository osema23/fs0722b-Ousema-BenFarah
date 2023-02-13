CREATE TABLE IF NOT EXISTS clienti (
 numero_clienti INT NOT NULL PRIMARY KEY,
	nome VARCHAR NOT NULL,
	cognome VARCHAR NOT NULL,
	data_nascita VARCHAR NOT NULL,
	regione_residenza VARCHAR NOT NULL
);
CREATE TABLE IF NOT EXISTS fatture (
numero_fattura INT NOT NULL PRIMARY KEY,
tipologia VARCHAR NOT NULL ,
importo FLOAT NOT NULL ,
iva VARCHAR NOT NULL,
id_cliente VARCHAR NOT NULL ,
data_fattura VARCHAR NOT NULL,
numero_fornitore VARCHAR NOT NULL
);
CREATE TABLE IF NOT EXISTS prodotti (
id_prodotto VARCHAR NOT NULL,
	descrizione VARCHAR NOT NULL,
	in_produzione INT NOT NULL,
	in_commercio INT NOT NULL,
	data_attivazione VARCHAR NOT NULL,
	data_disattivazione VARCHAR NOT NULL
);
CREATE TABLE IF NOT EXISTS fornitori (
numero_fornitore VARCHAR NOT NULL,
	denominazione VARCHAR NOT NULL,
	regione_residenza VARCHAR NOT NULL
);
INSERT INTO clienti (numero_clienti, nome,cognome,data_nascita,regione_residenza) VALUES (14,'osema','ben','23/09/2001','sicilia');
INSERT INTO clienti (numero_clienti, nome,cognome,data_nascita,regione_residenza) VALUES (28,'beppe','verdi','13/03/1982','lombardia');
SELECT * FROM clienti WHERE data_nascita LIKE '%1982';
INSERT INTO fatture (numero_fattura, tipologia, importo,iva ,id_cliente, data_fattura,numero_fornitore) VALUES (0011,'ciao',2214,'20%','cd147gvb','14/05/2023','3402752140');
INSERT INTO fatture ( numero_fattura, tipologia, importo,iva ,id_cliente, data_fattura,numero_fornitore) VALUES (0021,'salut',5241,'50%','cf523gbh','12/01/2023','3473015298');
SELECT * FROM fatture WHERE iva ='20%';