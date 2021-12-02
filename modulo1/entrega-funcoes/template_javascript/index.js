// Exercícios de interpretação de código:

// 1->

/* a.
 *  - 10
 *  - 50
 */

/* b.
 * - Apenas apareceria o resultado referente ao último input, pois a função esta retornando o resultado do ultimo input e não imprimindo o resultado de cada input, como é pedido pelo console.log()
 * - 50
 */

// 2-> 

/* a.
 *  a função recebe como parametro um texto, string, e transforma todos os caracteres em letras minúsculas, além disso retorna um booleano caso a string 'cenoura' for encontrada, no caso de sim retorna true. A utilidade é formatar um texto para que ele aceite tanto letras maiúsculas quanto minúsculas e identifique se ele contém uma palavra específica.
 */

/* b. 
 *  - eu gosto de cenoura true
 *  - cenoura é boa pra vista true
 *  - cenouras crescem na terra true
 */

// Exercícios de escrita de código:

// 1-> 

/* a.
 */
const aboutMe = () => {
    return 'Olá me chamo Leo, tenho 24 anos, moro em Colombo/PR e sou estudante.';
};
console.log(aboutMe());

/* b.
*/


const aboutSomeone = (usrName, usrAge, whereDoYaLive, theirJob) => {
    return `Eu sou ${usrName}, tenho ${usrAge} anos, moro em ${whereDoYaLive} e sou ${theirJob}.`;
};

const usrName = prompt('Como você se chama?');
const usrAge = prompt('Qual é a sua idade?');
const whereDoYaLive = prompt('Onde você mora?');
const theirJob = prompt('Complete a frase: Eu sou ...');

console.log(aboutSomeone(usrName, usrAge, whereDoYaLive, theirJob));

// 2->

/* a.
*/
const add = (num1, num2) => {
    const sum = num1 + num2;
    
    return `O resultado de ${num1} + ${num2} é: ${sum}`;
};
const num1 = Number(prompt('Insira um número:'));
const num2 = Number(prompt('Insira mais um número:')); 

console.log(add(num1, num2));

/* b.
*/
const oneIsBiggerThanTheOther = (num1, num2) => {
    return num1 > num2;
};

const num1 = Number(prompt('Insira um número:'));
const num2 = Number(prompt('Insira mais um número:')); 

console.log(oneIsBiggerThanTheOther(num1, num2));

/* c.
*/
const isEven = (num) => {
    return num % 2 === 0;
}; 

const num = Number(prompt('Insira um número:'));

console.log(isEven(num));

/* d.
*/
const turninMessage = (msg) => {
    return `${msg.length} ${msg.toUpperCase()}`;
};

const msg = prompt('Digite aqui um texto qualquer:');

console.log(turninMessage(msg));

// 3->
const add = (num1, num2) => {
    return `Soma: ${num1 + num2}`;
};
const sub = (num1, num2) => {
    return `Diferença: ${num1 - num2}`;
};
const mult = (num1, num2) => {
    return `Multiplicação: ${num1 * num2}`;
};
const div = (num1, num2) => {
    return `Divisão: ${num1 / num2}`;
};

const num1 = Number(prompt('Insira um número:'));  
const num2 = Number(prompt('Insira mais um número:')); 

console.log(`Números inseridos: ${num1} e ${num2}`);
console.log(add(num1, num2));
console.log(sub(num1, num2));
console.log(mult(num1, num2));
console.log(div(num1, num2));

// DESAFIOOOOOO!!

// 1->

/* a.
*/
const whatIstheParam = (param) => {
    return console.log(param);
};

const param = prompt('Coloque qualquer coisa aqui:');

whatIstheParam(param);

/* b.
*/
const add = (value1, value2) => {
    const sum = value1 + value2;
    whatIstheParam(sum);
};

const value1 = Number(prompt('Insira um número:'));
const value2 = Number(prompt('Insira mais um número:'));

add(value1, value2);

// 2->
const pitagoras = (cat1, cat2) => {
    const cat1Sqr = cat1 * cat1;
    const cat2Sqr = cat2 * cat2;

    const hipSqr = cat1Sqr + cat2Sqr;

    const hip = Math.sqrt(hipSqr);

    return whatIstheParam(hip.toFixed(2));
};

const cat1 = Number(prompt('Para calcular a hipotenusa insira o valor de um cateto:'));
const cat2 = Number(prompt('Insira o valor do outro cateto:'));

pitagoras(cat1, cat2);