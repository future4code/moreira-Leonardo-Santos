// Exercícios de interpretação de código

//1->
/* - O código está somando ao valor de 'valor' o valor de 'i' até que 'i' tenha o valor de 4
 * - 0
 * - 1
 * - 2
 * - 3
 * - 4
 */

//2->
/* a->
 * - 19
 * - 21
 * - 23
 * - 25
 * - 27
 * - 30
 */
/* b->
 * - Sim, para fazer isso seria necessario o seguinte bloco de código:
 */
// for (numero of lista) {
//     console.log(lista.indexOf(numero));
// }

//3->
/* - *
/* - **
/* - ***
/* - ****
 */

// Exercícios de escrita de código

//1->
const howMuchPets =  Number(prompt('Quantos bichinhos de estimação você tem?'))

/* a->
 */
let msg = 'Que pena! Você pode adotar um pet!'

if (howMuchPets === 0) {
    console.log(msg);
}

/* b->
 */
else if (howMuchPets > 0) {
    const petNames = [];
    
    for (let i = 0; i < howMuchPets; i++) {
        petNames.push(prompt('Qual(is) é(são) o(s) nome(s) de seu(s) Pet(s)?'));
    }

    /* c->
     */

    for (let i = 0; i < petNames.length; i++) {
        console.log(petNames[i]);
    }
}

//2->
/* a->
 */
const arrayOriginal = [1,23,4,5,1,2,54,6,78,4,3,6,7,4,3];

const printOnConsole = (arr) => {
    for (num of arr) {
        console.log(num);
    }
};

printOnConsole(arrayOriginal);

/* b->
 */
const numsBy10 = (arr) => {
    for (num of arr) {
        console.log(num / 10);
    }
};

numsBy10(arrayOriginal);

/* c->
 */
const onlyEvens = [];

const takeEvens = (arr) => {
    for (num of arr) {
        if (num % 2 === 0) {
            onlyEvens.push(num);
        }
    }

    for (nums of onlyEvens) {
        console.log(nums);
    }
};

takeEvens(arrayOriginal);

/* d->
 */
const readableArr = [];

const turnItReadable = (arr) => {
    let msg = '';
    
    for (let i = 0; i < arr.length; i++) {
        msg = `O elemento do índex ${i} é: ${arr[i]}`;

        readableArr.push(msg);
    } 

    for (str of readableArr) {
        console.log(str);
    }
};

turnItReadable(arrayOriginal);

/* e->
 */
const whitchAreTheBiggerNLesserNums = (arr) => {
    let bigger = arr[0];
    let lesser = arr[0];

    for (num of arr) {
        if (num > bigger) {
            bigger = num;
        }
        else if (num < lesser) {
            lesser = num;
        }
    }

    return console.log(`O maior número é ${bigger} e o menor é ${lesser}`);
};

whitchAreTheBiggerNLesserNums(arrayOriginal);

// Desafiooo

//1->
const whichNumImThinkin = () => {
    /* a->
     */
    const correctNum = Number(prompt('Para começar um jogador insere aqui um número inteiro maior que 0, sem falar para o outro jogador:'));

    alert('Vamos Jogar!');
    console.log('Vamos Jogar!');

    /* b->
     */
    let kick = Number(prompt('Em qual número eu estou pensando?'));

    let kickNumMsg = `O número chutado foi: ${kick}`;
    let victoryMsg = 'Acertou!!';

    let failMsg = 'Errrrrrrroooouuu,';
    let msg = '';

    let tryOuts = 1;
    while (kick !== correctNum) {

        alert(kickNumMsg);
        console.log(kickNumMsg);

        if (kick > correctNum) {

            msg = `é menor`; 
        }
        else if (kick < correctNum) {
            msg = `é maior`;
        }
        
        kick = Number(prompt(`${failMsg} ${msg} Tente outra vez:`));
        console.log(`${failMsg} ${msg} Tente outra vez:`);

        kickNumMsg = `O número chutado foi: ${kick}`;

        tryOuts += 1;
    }

    let tryOutsMsg = `O número de tentativas foi: ${tryOuts}`;

    if (kick === correctNum) {
        alert(kickNumMsg)
        console.log(kickNumMsg);
        alert(`${victoryMsg}\n${tryOutsMsg}`);
        console.log(`${victoryMsg}\n${tryOutsMsg}`);
    }

    return correctNum;
};

whichNumImThinkin();

//2->
const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.ceil(max);

    return Math.floor(Math.random() * (max - min + 1)) + min; 
};


const whichNumThePcIsThinkin = () => {
    /* a->
     */
    alert('Para começar o computador escolherá um número inteiro maior que 0!');

    const correctNum = getRandomNumber(1, 100);

    alert('Vamos Jogar!');
    console.log('Vamos Jogar!');

    /* b->
     */
    let kick = Number(prompt('Em qual número eu estou pensando?'));

    let kickNumMsg = `O número chutado foi: ${kick}`;
    let victoryMsg = 'Acertou!!';

    let failMsg = 'Errrrrrrroooouuu,';
    let msg = '';

    let tryOuts = 1;
    while (kick !== correctNum) {

        alert(kickNumMsg);
        console.log(kickNumMsg);

        if (kick > correctNum) {

            msg = `é menor`; 
        }
        else if (kick < correctNum) {
            msg = `é maior`;
        }
        
        kick = Number(prompt(`${failMsg} ${msg} Tente outra vez:`));
        console.log(`${failMsg} ${msg} Tente outra vez:`);

        kickNumMsg = `O número chutado foi: ${kick}`;

        tryOuts += 1;
    }

    let tryOutsMsg = `O número de tentativas foi: ${tryOuts}`;

    if (kick === correctNum) {
        alert(kickNumMsg)
        console.log(kickNumMsg);
        alert(`${victoryMsg}\n${tryOutsMsg}`);
        console.log(`${victoryMsg}\n${tryOutsMsg}`);
    }

    return correctNum;
};

whichNumThePcIsThinkin();