// Exemplos
/*1->
*/
let i = 0;

while (i < 10) {
    console.log(i);

    i++;
}

/*2->
 */
for (let estomago = 0; estomago <= 100; estomago += 10) {
    console.log('quero comer mais coxinhas!!');
}

/*3->
 */
const arrOfNumsExample = [1,12,3,43,2,13,43,1,243,5,4,3,442,89]

let maior = 0;

for (let num of arrOfNumsExample) {
    if (num > maior) {
        maior = num;
    }
}
console.log(maior);

// Exercícios

/*1-> 
 */
let num = Number(prompt('Insira um número:'));

let counter = 0;

while (num !== 0) {
    num = Number(prompt('Insira outro número:'));

    counter += num;
}

console.log(`A soma de todos os números inseridos até você inserir 0 é: ${counter}.`);

/*2->
 */
const arrOfNums = [1,12,3,43,2,13,43,1,243,5,4,3,442,89];

const whitchIsBigger = (numList) => {
    let bigger = 0;

    for (let i = 0; i < numList.length; i++) {
        if (numList[i] > bigger) {
            bigger = numList[i];
        }
        
    }

    return console.log(bigger);
};

whitchIsBigger(arrOfNums);

/*3->
 */
const arrOfWords = ['Oi','sumide','tudo','bem','?','Saudades','!'];

const turnIntoString = (arr) => {
    let str = '';

    for (word of arr) {
        str += ` ${word}`;
    }

    return console.log(str);
};

turnIntoString(arrOfWords);