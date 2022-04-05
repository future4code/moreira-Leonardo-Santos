## Respostas dos exercícios de intro a SQL
*****

### Exercício 1 

a)<br>
**VARCHAR({num de caracteres})** que define que este campo receberá um texto com número máximo de caracteres o valor declarado dentro dos parênteses;<br> 
**PRIMARY KEY** este determina que aquele campo, além de ter que ser único pra cada item da tabela, ele será tomado como identificador primário de cada um;<br>
**NOT NULL** define que aquele campo não pode ficar sem preenchimento;<br>
**DATE** determina que este campo recebera uma data no seguinte formato *YYYY-MM-DD*.
*****

b)<br>
**SHOW DATABASES**: Mostra na grade de resutados todas os bancos de dados aos quais você tem acesso.<br>
**SHOW TABLES**: Mostra na grade de resultados todas as tabelas dentro dos bancos de dados que você tem acesso.
*****

c)<br>
**DESCRIBE** Mostra na grade de resultados a estrutura da tabela passada após o comando.
*****

### Exercício 2

a)<br>
```
INSERT INTO actors (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
);
```
<br>
b)<br>

```
entry:
INSERT INTO actors (id, name, salary, birth_date, gender)
VALUES(
	"002",
    "Lupita Nyongo",
    2800000,
    "1983-08-23",
    "female"
);

response:
Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
```

Tradução do erro: "Código de Erro: 1062. Entrada duplicada '002' para chave 'PRIMÁRIA'"<br>
-> Esse erro aconteceu pois o mesmo valor foi atribuido em dois elementos da mesma tabela e este valor era um **PRIMARY KEY** que deve ser único por item.<br>

c)<br>

```
entry:
INSERT INTO actors (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

response:
Error Code: 1136. Column count doesn't match value count at row 1
```
Tradução do erro: "Código de Erro: 1136. Contagem de colunas não corresponde a contagem de valores na linha 1"<br>
-> Este erro diz que o número de valores em VALUE é maior que o número de propriedades declaradas após **INSERT INTO actors**<br>

d)<br>

```
entry:
INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);

response:
Error Code: 1364. Field 'name' doesn't have a default value
```
Tradução do erro: "Código de Erro: 1364". Campo 'name' não tem um valor padrão<br>
-> Aqui estamos tentando passar as informações mas não passamos a que deveria ir em name, e como esta requer uma entrada com o comando **NOT NULL** e sem um padrão pra ser posto caso não tenha informação<br>

e)<br>

```
entry:
INSERT INTO actors (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);

response: 
Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1

```
Tradução do erro: "Código de Erro: 1292. Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1"<br>
-> O valor que está sendo passado não tem aspas o envolvendo como é determinado pelo comando **DATE**
*****

f)<br>

```
INSERT INTO actors (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Anne Hathway",
  719333.33,
  "1979-03-26", 
  "female"
);

-----------------------------------------------------

INSERT INTO actors (id, name, salary, birth_date, gender)
VALUES(
  "008", 
  "Donald Glover",
  719333.33,
  "1979-03-26", 
  "male"
);
```

*****

### Exercício 3

a)<br>

```
SELECT * FROM actors WHERE gender = "female";
```

b)

```
SELECT salary FROM actors WHERE name = "Tony Ramos";
```

c)<br>

O resultado foi uma tabela com itens **null**, pois não foram encontrados itens com **gender = "invalid"**; 

d)<br>

```
SELECT id, name, salary FROM actors WHERE salary <= 500000;
```

e)<br>
```
response:
Error Code: 1054. Unknown column 'nome' in 'field list'
```
Tradução do erro: Código de Erro: 1054. Coluna desconhecida 'nome' em 'lista de campos'<br>
-> Esse erro aconteceu porque está declarado na tabela a propriedade **'name'** e na query esta sendo solícitada a propriedade **'nome'**.
```
right query:
SELECT id, name from actors WHERE id = "002";
```
*****

### Exercício 4

a)<br>
A query **seleciona** todos os itens **da** lista **Actor onde** o **nome** começe com **A ou j e** com o **salário maior que 300000**<br>

b)<br>
```
SELECT * FROM actors WHERE name NOT LIKE "A%" AND salary > 350000;
```
c)<br>
```
SELECT * FROM actors WHERE name LIKE "%G%" OR name LIKE "%g%";
```

d)
```
SELECT * FROM actors WHERE (name LIKE "%G%" OR name LIKE "%g%" OR name LIKE "%A%" OR name LIKE "%a%") AND salary BETWEEN 350000 AND 900000;
```
*****
### Exercício 5

a)
```
CREATE TABLE movies(
	id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    sinopsis TEXT,
    launch_date DATE NOT NULL,
    grade SMALLINT
);
```
Essa query está criando uma tabela com o nome movies que contem os seguintes campos a serem preenchidos com informações posteriores, eles são id, name, sinopsis, launch_date e grade.

b, c, d, e)
```
NSERT INTO movies(id, name, sinopsis, launch_date, grade)
VALUES(
	"001",
	"Se Eu Fosse Você",
	"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
	"2006-01-06",
	7
),
(
	"002",
	"Doce de mãe",
	"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
	"2012-12-27",
	10
),
(
	"003",
	"Dona Flor e Seus Dois Maridos",
	"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
	"2017-11-02",
	8
),
(
	"004",
    "Deserto Particular",
    "Em Deserto Particular, Daniel é um policial exemplar, mas acaba cometendo um erro que coloca em risco sua carreira e sua honra. Quando nada mais parece o prender a Curitiba, ele parte em busca de Sara, uma mulher com quem se relaciona virtualmente. Ele então mergulha em um intenso processo interno para aprender a lidar melhor com seus próprios afetos.",
    "2021-11-25",
    8
);
```
*****

### Exercício 6

a)
```
SELECT id, name, grade FROM movies WHERE id = 002;
```

b)
```
SELECT * FROM movies WHERE name = "Deserto Particular";
```

c)
```
SELECT id, name, sinopsis FROM movies WHERE grade >= 7;
```
*****

### Exercício 7

a)
```
SELECT * FROM movies WHERE name LIKE "%vida%";
```

b)
```
SELECT * FROM movies WHERE name LIKE "%Particular%" OR sinopsis LIKE "%Particular%";
```

c)
```
SELECT * FROM movies WHERE launch_date < "2022-04-05";
```

d)
```
SELECT * FROM movies WHERE launch_date < "2022-04-05" AND (name LIKE "%Particular%" OR sinopsis LIKE "%Particular%") AND grade > 7;
```
*****