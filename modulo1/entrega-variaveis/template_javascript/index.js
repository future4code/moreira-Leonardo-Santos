// Exercícios de interpretação de código:

/* Programa 1
 * -> primeiramente sera impresso '10';
 * -> o segundo console ira imprimir '10' '5';
 */

/* Programa 2
 * -> sera impresso no console '10' '10' '10';
 */

/* Programa 3
 * -> renomeando as variáveis:
 *  let workDailyHrs = prompt("Quantas horas você trabalha por dia?");
 *  let dailyGains = prompt("Quanto você recebe por dia?");
 *  alert(`Voce recebe ${dailyGains/workDailyHrs} por hora`);
 * -> E sera impresso no console o valor da divisão dos Ganhos Diarios (dailyGains) pelas Horas Trabalhadas Diariamente (workDailyHrs);
 */

// Exercícios de escrita de código:

// Programa 1

let usrName;
let age;

console.log(typeof usrName, typeof age);
// o tipo das duas variáveis no momento é 'undefined', ou seja, não foram atribuidos valores a elas;

// aqui mudando os valores das variáveis
usrName = prompt('Qual é seu nome?');
age = prompt('Qual é a sua idade?');

console.log(typeof usrName, typeof age);
// o tipo das duas agora é 'string', ou seja, ambas tem valores armazenados e estes são textos;

// impressão no console dos valores inputados pelo usuario
console.log(`Olá ${usrName}, você tem ${age} anos`);

// programa 2

//declarando as tres perguntas e armazenando-as em suas respectivas variáveis
let firstQuestion = 'Você mora em Curitiba?';
let secondQuestion = 'Você joga video jogos?';
let thirdQuestion = 'Você gosta de paçoca?';

//declarando as respostas
let firstAnswer = 'SIM';
let secondAnswer = 'SIM';
let thirdAnswer = 'SIM';

//imprimindo perguntas e respostas no console
console.log(`${firstQuestion} - ${firstAnswer}\n${secondQuestion} - ${secondAnswer}\n${thirdQuestion} - ${thirdAnswer}`);

// Programa 3

let a = 10;
let b = 25;

//logica da troca de valores
let tempA = a;
let tempB = b;

a = tempB;
b = tempA;

//imprimindo resultados no console
console.log('O novo valor de a é', a);
console.log('O novo valor de b é', b);

// THANANANANNNNNN DESAFIOOOOO!!!!

//declarando variáveis que armazenam os números
let num1 = prompt('Insira o primeiro número:');
let num2 = prompt('Insira o segundo número:');

//declarando as variáveis de resultado
let x = num1 + num2;
let y = num1 * num2;

//imprimindo no console os resultados
console.log('1. O primeiro número somado ao segundo número resulta em:', x,'\n2. O primeiro número multiplicado pelo segundo número resulta em:', y);