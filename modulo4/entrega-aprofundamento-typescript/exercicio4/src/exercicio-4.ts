// Exercício 4

/* a
 */
type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

/* b
 */
/* apenas rodaria o comando tsc na pasta onde se encontra o documento .ts 
 */
/* Caso não estivesse especificado a pasta raiz no arquivo tsconfig.json, o comando seria tsc ./src/exercicio-4.ts
 */

/* c
 */
/* Eu sei o modo de usar operador && no terminal : tsc doc.ts && tsc doc2.ts && ... Mas creio que o modo de rodar apenas o tsc, no qual ele procurara todos os arquivos .ts seja mais rapido e produtivo
 */
