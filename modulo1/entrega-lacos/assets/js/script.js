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