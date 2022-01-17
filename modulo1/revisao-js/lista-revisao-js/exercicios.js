// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const result = [];

    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }

    return result;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    const result = array.sort((a, b) => a - b);

    return result;
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            result.push(array[i]);
        }
    }

    return result;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.map((item, index, array) => {
        if (item % 2 === 0) {
           return item = item * item;
        }
    }).filter((item, index, array) => {
        if (item !== null) {
            return item;
        }
    });
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let result = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > result) {
            result = array[i];
        }
    }

    return result;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const numObj = {};
    let higherNum = num1;
    let lowerNum = num2;
    let isDivisible = false;
    
    if (num1 < num2) {
        higherNum = num2;
        lowerNum = num1;
    }

    numObj.maiorNumero = higherNum;

    if (higherNum % lowerNum === 0) {
        isDivisible = true;
    }

    numObj.maiorDivisivelPorMenor = isDivisible;

    numObj.diferenca = higherNum - lowerNum;

    return numObj;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const result = [];

    for (let i = 0; i < n; i++) {
            result.push(i*2);
        }
    

   return result;
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    let result = 'Isósceles';

    if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA) {
        result = 'Equilátero';
    }
    else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
        result = 'Escaleno';
    }

    return result;
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let result = [];
    let secondLast = array.length - 2;

    array.sort((a, b) => {return a - b});
    
    result.push(array[secondLast]);
    result.push(array[1]);

    return result;
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let finalMsg = `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`;

    return finalMsg;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const anonimous = {...pessoa,
    nome: 'ANÔNIMO'};

    return anonimous;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const allowed = pessoas.filter((item, index, list) => {
        if (item.idade > 14 && item.idade < 60 && item.altura >= 1.5){
            return item
        }
    });

    return allowed;
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    const notAllowed = pessoas.filter((item, index, list) => {
        if (item.idade <= 14 || item.idade > 60 || item.altura < 1.5){
            return item
        }
    });

    return notAllowed;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((pessoa) => {
        let currentCost = 0;

        for (let i = 0; i < pessoa.compras.length; i++) {
            currentCost += pessoa.compras[i];
        }

        pessoa.saldoTotal -= currentCost;

        return pessoa.saldoTotal;
    });

    for (let i = 0; i < contas.length; i++) {
        contas[i].compras = []
    }
    
    return contas;
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort((a, b) => {
        if (a.nome > b.nome) {
            return 1;
        }
        else {
            return -1;
        }
    });

    return consultas;
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    for (let pessoa of consultas) {
        pessoa.dataDaConsulta = pessoa.dataDaConsulta.split('/');
    }

    for (let i = 0; i < consultas.length; i++) {
        for (let i2 = 0; i2 < consultas[i].dataDaConsulta.length; i2++) {
            consultas[i].dataDaConsulta[i2] = Number(consultas[i].dataDaConsulta[i2]);
        }
    }

    consultas.sort((a, b) => {
        if (a.dataDaConsulta[0] < b.dataDaConsulta[0]) {
            return 1;
        }
        else {
            return -1;
        }
    });

    consultas.sort((a, b) => {
        if (a.dataDaConsulta[1] > b.dataDaConsulta[1]) {
            return 1;
        }
        else {
            return -1;
        }
    });

    for (let i = 0; i < consultas.length; i++) {
        for (let i2 = 0; i2 < consultas[i].dataDaConsulta.length; i2++) {
            consultas[i].dataDaConsulta[i2] = consultas[i].dataDaConsulta[i2].toString();

            if (consultas[i].dataDaConsulta[i2].length < 2) {
                consultas[i].dataDaConsulta[i2] = `0${consultas[i].dataDaConsulta[i2]}`;
            }
        }
    }

    for (let pessoa of consultas) {
        pessoa.dataDaConsulta = pessoa.dataDaConsulta.join('/');
    }

    return consultas;
}