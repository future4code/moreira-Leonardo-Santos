// Exemplos:

const verificarPar = (num, imprime) => {
    return num % 2 === 0 ? imprime(num / 2) : 'não é par';
};

const imprimeMensagem = (valor) => console.log(`O resultado é: ${valor}`);

verificarPar(8, imprimeMensagem);