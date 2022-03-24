// Exercício 2

/* a
 */
/* Afunção recebe uma array de números e retorna um ojeto chamado estatisticas que contem o maior e o menor número da array e a média dos itens array
 */

/* b
 */
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {
        maior: number,
        menor: number,
        media: number
    } = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

/* c
 */
type Amostra = {
    numeros: number[],
    obterEstatisticas: any
};

const amostraDeIdades: Amostra = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: obterEstatisticas
}    

console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros));