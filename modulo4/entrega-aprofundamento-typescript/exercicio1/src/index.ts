// Exercício 1

/* a
 */
const minhaString: string = 'valor';

/* b
 */
const meuNumero: number = 5;

/* Como vimos em aula podemos usar de types para que uma variável possa assumir valores de diferentes tipos
 */
/* Neste caso para que a variável aceite tanto números quanto strings poderiamos usar um Union Type - '|'
 */

const meuValor : number | string = 2+'ta ai ó';

/* c
 */

/* d
 */
enum Rainbow {
    VERMELHO = 'vermelho',
    LARANJA = 'laranja',
    AMARELO = 'amarelo',
    VERDE = 'verde',
    AZUL = 'azul',
    ANIL = 'anil',
    VIOLETA = 'violeta'
};

const pessoa: {
    nome: string,
    idade: number,
    corFavorita: Rainbow
} = {
    nome: 'Leona',
    idade: 24,
    corFavorita: Rainbow.AMARELO
};

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: Rainbow
};

const pessoa1: Pessoa = {
    nome: 'Isa',
    idade: 24,
    corFavorita: Rainbow.VIOLETA
}

const pessoa2: Pessoa = {
    nome: 'Caê',
    idade: 2,
    corFavorita: Rainbow.VERDE
}

const pessoa3: Pessoa = {
    nome: 'Hórus',
    idade: 1,
    corFavorita: Rainbow.LARANJA
}