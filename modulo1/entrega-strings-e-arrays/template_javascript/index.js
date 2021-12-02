// Exercícios de interpretação:

// 1->
/*  - a. undefined
 *  - b. null
 *  - c. 11
 *  - d. 3
 *  - e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
 *  - f. 9
 */

// 2->
/*  - SUBI NUM ÔNIBUS EM MIRROCOS 27
 */

// Exercícios de escrita de código:

// 1-> 
const usrName = prompt('Como você se chama?');
const usrMail = prompt('Qual é seu melhor e-mail?');

console.log(`O e-mail ${usrMail} foi cadastrado com sucesso. Seja bem-vinda(o), ${usrName}!`);

// 2->
const favMeal = ['amendoim', 'lasanha de cabotiá', 'lanchão', 'pizza', 'arroz e feijão'];

// a.
console.log(favMeal);

// b.
console.log('Essas são minhas comidas preferidas:');
console.log(favMeal[0]);
console.log(favMeal[1]);
console.log(favMeal[2]);
console.log(favMeal[3]);
console.log(favMeal[4]);

// c. 
const usrFavMeal = prompt('Qual é a sua comida favorita?');

favMeal[1] = usrFavMeal;

console.log(favMeal);

// 3->

// a.
const listaDeTarefas = [];

// b.
const msg = 'Coloque aqui uma de três tarefas que vc tem para hj:'

const tarefa1 = prompt(msg);
const tarefa2 = prompt(msg);
const tarefa3 = prompt(msg);

listaDeTarefas.push(tarefa1, tarefa2, tarefa3);

// c.
console.log(listaDeTarefas);

// d.
let numDeTarefas = listaDeTarefas.length - 1;
const feita = Number(prompt('Qual é o índice da tarefa realizada? de 0 a '+numDeTarefas+'.'));

// e.
listaDeTarefas.splice(feita, 1);

// f.
console.log(listaDeTarefas);

// Desafiooooooo!!!!

// 1->
const frase = prompt('digite uma frase aqui:');

const arrDeFrase = frase.split(' ');

console.log(arrDeFrase);

// 2->
const exampleArray = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];

console.log(exampleArray.indexOf('Abacaxi'), exampleArray.length);