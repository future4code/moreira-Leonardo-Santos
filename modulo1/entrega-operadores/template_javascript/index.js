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

// Atividade 1:

/* a.
 *  pedir por uma uma temperatura em Fahrenheit -> tF;
 *  converter tF para Kelvin -> tK;
 *  imprimir tK no console acompanhado de sua unidade - "tK°K"
 */ 
const tF = Number(prompt("Insira um valor de temperatura em Fahrenheit:"));

let tK = (tF - 32) * 5/9 + 273.15;

console.log(`${tF}°F === ${tK.toString().replace('.', ',')}°K`);

/* b.
 *  pedir por uma uma temperatura em Celsius -> tCe;  
 *  converter tCe para Fahrenheit -> tFa;
 *  imprimir tFa no console acompanhado de sua unidade - "tFa°F"
 */
const tCe = Number(prompt("Insira um valor de temperatura em Celsius:"));

let tFa = (tCe * 9/5) + 32;

console.log(`${tCe}°C === ${tFa.toString().replace(".", ",")}°F`);

/* c.
 *  pedir por uma uma temperatura em Celsius -> tC;  
 *  converter tC para Fahrenheit e Kelvin-> tF e tK;
 *  imprimir tF e tK no console acompanhados de suas unidades - "tF°F e tK°K"  
 */
const tCel = Number(prompt("Insira um valor de temperatura em Celsius:"));

let tFah = (tCel * 9/5) + 32;
let tKel = tCel + 273.15;

console.log(`${tCel}°C === ${tFah.toString().replace(".", ",")}°F e ${tKel.toString().replace(".", ",")}°K`)

/* d.
 *  fiz dessa forma para todas as outras propostas a cima ∆
 */

// Atividade 2:

/* a.
 *  pedir por uma quantidade, em número, de quilowatts -> kWatts;
 *  realizar cálculo de quanto é gasto em um mês dado o consumo na kWatts -> bill = kWatts * 0.05;
 *  imprimir bill no console;
 */ 
const kWatts = Number(prompt('insira o consumo de killowatts por hora de sua residência:'));

let bill = kWatts * 0.05;

console.log(`Sua conta será no valor de: R$ ${bill.toFixed(2).toString().replace(".", ",")}`);

/* b. 
 *  diminuir de bill o valor de 15% de kWatts
 *  bill -= 15 * kWatts / 100;
 */

bill = 15 * bill / 100;

console.log(`Com 15% de desconto ficará: R$ ${bill.toFixed(2).toString().replace(".", ",")}`);

// Atividade 3:

/* a.
 *  pedir ao usr por um número representando um peso em libras -> lbs;
 *  realizar o cálculo de conversão de libras para kilogramas -> lbs / 2.205;
 *  imprimir resultado no console -> lbs+"lb equivalem a "+"kg";
 */
const lbs = Number(prompt("insira um valor de massa em libras:"));

let kgs = lbs / 2.205;

console.log(`${lbs}lb equivalem a ${kgs.toFixed(4).toString().replace('.', ',')}kg`);

/* b.
 *  pedir ao usuário um valor representando onça(oz) -> ozs;
 *  realizar o calculo de conversão tambem para kg -> oz / 35,374;
 *  imprimir resultados no console;
 */
const ozs = Number(prompt("insira um valor de massa em onças:"));

kgs = ozs / 35.374;

console.log(`${ozs}oz equivalem a ${kgs.toFixed(4).toString().replace('.', ',')}kg`);

/* c.
 * milhas para metro -> miles * 1609;
 */
const miles = Number(prompt("insira um valor de distancia em milhas:"));

let meters = miles * 1609;

console.log(`${miles}mi equivalem a ${meters.toFixed(4).toString().replace('.', ',')}m`);

/* d.
 * pés para metros -> feet / 3,281;
 */
const feet = Number(prompt("insira um valor de distancia em pés:"));

meters = feet / 3.281;

console.log(`${feet}ft equivalem a ${meters.toFixed(4).toString().replace('.', ',')}m`);

/* e.
 * galões para litros -> gals * 3,785;
 */
const gals = Number(prompt("insira um valor de volume em galões:"));

let li = gals * 3.785;

console.log(`${gals}gal equivalem a ${li.toFixed(4).toString().replace('.', ',')}l`);

/* f.
 * xícaras para litros -> cups / 3,52;
 */
const cups = Number(prompt("insira um valor de volume em xícaras:"));

li = cups / 3.52;

console.log(`${cups}xic equivalem a ${li.toFixed(4).toString().replace('.', ',')}l`);

/* g.
 *  Aplicada a todas as propostas a cima ∆
 */