## Respostas Entrega - Aprofundamento em SQL
****

### Exercício 1
a)<br>
Este comando alteraria a tabela **Actor** removendo a coluna **salary**<br>
b)<br>
Altera a tabela **Actor** **mudando** a coluna gender para sex e atribuindo uma nova **constraint**<br>
c)<br>
Altera a tabela **Actor** **mudando** a coluna gender para gender e atribuindo uma nova **constraint** com um número maior de caractéres<br>
d)<br>
```
ALTER TABLE actors CHANGE gender gender VARCHAR(100);
```
*****

### Exercício 2
a)<br>
```
UPDATE actors SET name = 'Viola Davis', birth_date = "1975-08-03" WHERE id = 003;
```
b)<br>
```
UPDATE actors SET name = UPPER(name) WHERE name = "Juliana Paes";
-----
UPDATE actors SET name = "Juliana Paes" WHERE name = "JULIANA PAES";
```
c)<br>
```
UPDATE actors SET id = 035, name = 'Taís Araujo', birth_date = "1982-05-11", salary = 500000, gender = 'female', hometown = 'Rio de Janeiro' WHERE id = 005;
```
d)<br>
```
UPDATE actors SET name = 'Taís Araujo', birth_date = "1982-05-11", salary = 500000, gender = 'female', hometown = 'Rio de Janeiro' WHERE id = 020;
```
O código a cima executa e não resulta em um erro, mesmo o id 020 não existindo, mas caso eu erre o nome de algum campo como no exemplo a baixo ele me aponta o erro de que aquele campo não existe na lista de campos da tabela
```
FAIL:

  UPDATE actors SET nome = 'Taís Araujo', birth_date = "1982-05-11", salary = 500000, gender = 'female', hometown = 'Rio de Janeiro' WHERE id = 020

Message :

  Unknown column 'nome' in 'field list'
```
*****

### Exercício 3
a)<br>
```
DELETE FROM actors WHERE name = 'Fernanda Montenegro';
```
b)<br>
```
DELETE FROM actors WHERE gender = 'male' AND salary > 1000000;
```
*****
### Exercício 4
a)<br>
```
SELECT MAX(salary) FROM actors;
```
b)<br>
```
SELECT MIN(salary) FROM actors WHERE gender = 'female';
```
c)<br>
```
SELECT COUNT(*) FROM actors WHERE gender = 'female';
```
d)<br>
```
SELECT SUM(salary) FROM actors;
```
*****
### Exercício 5
a)<br>
Essa query me retorna os generos existentes e a contagem deles, ou seja, o número de atores com cada genero<br>
b)<br>
```
SELECT id, name FROM actors ORDER BY name DESC;
```
c)<br>
```
SELECT * FROM actors ORDER BY salary ASC;
```
d)<br>
```
SELECT * FROM actors ORDER BY salary DESC LIMIT 3;
```
e)<br>
```
SELECT AVG(salary), gender FROM actors GROUP BY gender;
```
*****
### Exercícios 6
a)<br>
```
ALTER TABLE movies ADD playing_limit_date DATE;
```
b)<br>
```
ALTER TABLE movies CHANGE grade rating FLOAT;
```
c)<br>
```
UPDATE movies SET playing_limit_date = "2017-12-02" WHERE id = 3;
------
UPDATE movies SET playing_limit_date = "2022-12-02" WHERE id = 4;
```
d)<br>
```
entry:
UPDATE movies SET sinopsis = "DIAHFIUAEDINANDIANUDNnidunawi wd iuawnIUDN WIANdi nNIUNDNAWIUND adbawbd" WHERE id = 2;

response:
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
```
O comando roda com sucesso porem por não encontrar o id correspondente não há mudanças no item, por ele não existir, mas ainda assim nenhum erro é apontado.