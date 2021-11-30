// Exercícios de interpretação de código:

/* Atividade 1:
 * 
 * resultado: "a. false";
 * resultado: "b. false";
 * resultado: "c. true";
 * resultado: "d. bool";
 */

/* Atividade 2:
 * 
 * A função prompt(), como visto em aula, retorna apenas dados do tipo string,
 * sendo assim o resultado de string + string = stringstring
 * e o resultado esperado era num + num = num.
 * 
 * resultado no console: "primeiroNumeroSegundoNumero"
 */

/* Atividade 3: 
 *
 * Para que meu amigo obter o resultado esperado é necessário converter o tipo do dado
 * no caso de string para inteiro.
 */

// Exercícios de escrita de código:

/* atividade 1:
 * 
 * pedir ao usuário pela idade - converter para número inteiro - idade1;
 * pedir a idade da pessoa mais próxima emocionalmente para ela - converter para inteiro - idade2;
 * 
 * criar variável booleana para responder se a idade da pesso é maior que a do usr - isOlder;
 * criar variável para armazenar o inteiro resultante de idade1 - idade2 -> resultado;
 *
 * imprimir no console "Sua idade é maior que a do seu melhor amigue? isOlder";
 * e "e a diferença entre a idade de vocês é: result";
 */

const idade1 = Number(prompt("Qual é a sua idade?"));
const idade2 = Number(prompt("Qual é a idade do seu melhor amigue?"));

let isOlder = idade1 > idade2;
let result = idade1 - idade2;

console.log(`Sua idade é maior que a do seu melhor amigue? ${isOlder}`)
console.log(`e a diferença entre a idade de vocês é: ${result}`);

/* Atividade 2:
 *
 * pedir um numero par para o usr;
 * realizar a operação de restante: result <- num % 2; 
 * imprimir o resultado no console;
 */
// a.
const num = Number(prompt("Insira um número par:"));

console.log(num % 2);

/* respostas:
 * 
 * b. todo número par tem seu restante 0 se for dividido por 2;
 *
 * c. caso o número seja ímpar seu restante se dividido por dois sera diferente de 0;
 */

/* Atividade 3:
 * 
 * pedir ao usuário por um número - age <- idade do usr;
 * 
 * realizar calcúlos para obter aquele periodo em:
 * months <- meses: age * 12;
 * days <- dias: age * 365;
 * hours <- horas: age * 8760;
 * 
 * imprimir esses resultados no console:
 * "sua idade é: age";
 * "em meses: months";
 * "em dias: days";
 * "em horas: hours";
 */

const age = Number(prompt("Quantos anos vc tem?"));

let months = age * 12;
let days = age * 365;
let hours = age * 8760;

console.log(`Sua idade é: ${age}`);
console.log(`Em meses fica: ${months}`);
console.log(`Em dias: ${days}`);
console.log(`E em horas: ${hours}`);

/* Atividade 4:
 *
 * pedir ao usr por dois numeros - num1 e num2
 * realizar as seguintes operações logicas:
 * -> num1 > num2;       -> result1
 * -> num1 = num2;       -> result2
 * -> num1 % num2 === 0; -> result3
 * -> num2 % num1 === 0; -> result4
 *
 * imorimir os resultados apos de suas respectivas mensagens
 */

const num1 = Number(prompt("ïnsira um número:"));
const num2 = Number(prompt("ïnsira outro número:")); 

let result1 = num1 > num2;
let result2 = num1 === num2;
let result3 = num1 % num2 === 0;
let result4 = num2 % num1 === 0;

console.log(`O primeiro número é maior que o segundo? ${result1}`);
console.log(`O primeiro número é igual ao segundo? ${result2}`);
console.log(`O primeiro número é divisível pelo segundo? ${result3}`);
console.log(`O segundo número é divisível pelo primeiro ${result4}`);

// DESAFIOOOOO:

