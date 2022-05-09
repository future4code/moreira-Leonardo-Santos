// Exercício 1:
/* a)
 *  Utilizamos a propriedades process.argv que é uma
 *  array e nesta array estão armazenados os argumentos
 *  inseridos no console, no caso os argumentos que podemos utilizar 
 *  se encontram a partir da posição process.argv[2]
 *  pois as duas primeiras posições são ocupadas pelo node e pelo arquivo que será executado 
 */
/* b e c)
 */

const printNameAndAge = () => {
    const name = process.argv[2];
    const age = Number(process.argv[3]);

    return `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}`;
};
console.log(printNameAndAge());

