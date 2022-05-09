// Exercício 2

const operation = () => {
    const operator = process.argv[2];
    const firstNum = Number(process.argv[3]);
    const secondNum = Number(process.argv[4]);

    switch (operator) {
        case 'add':
            return console.log(`resposta: ${firstNum + secondNum}`);
        case 'sub':
            return console.log(`resposta: ${firstNum - secondNum}`);
        case 'mult':
            return console.log(`resposta: ${firstNum * secondNum}`);
        case 'div':
            return console.log(`resposta: ${firstNum / secondNum}`);
        default:
            return console.log('os parametros aceitos são "add", "sub", "mult", "div" seguidos pelos números');
    }
};
operation();