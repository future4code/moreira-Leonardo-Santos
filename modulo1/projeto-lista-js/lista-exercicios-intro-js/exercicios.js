// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const h = Number(prompt('Digite o valor da altura do seu retangulo:')); 
  const b = Number(prompt('Digite o valor da largura do seu retangulo:'));

  console.log(h * b);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const currentYear = Number(prompt('Em que ano estamos?')); 
  const birthYear = Number(prompt('Em que ano você nasceu?')); 

  console.log(currentYear - birthYear);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura);
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const usrName = prompt('Qual é seu nome?');
  const usrAge = prompt('Qual é sua idade?');
  const usrEmail = prompt('Qual é seu e-mail?');
  
  console.log(`Meu nome é ${usrName}, tenho ${usrAge} anos, e o meu email é ${usrEmail}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const color1 = prompt('Qual é a sua cor favorita?');
  const color2 = prompt('Qual é a sua segunda cor favorita?');
  const color3 = prompt('Qual é a sua cor mais ou menos favorita?');

  const arrOfColors = [];
  arrOfColors.push(color1, color2, color3);

  console.log(arrOfColors);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase();
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso;
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length;
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0];
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const i = array.length - 1;
  return array[i];
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const firstElement = array[0];
  const lastElement = array[array.length - 1];

  array[0] = lastElement;
  array[array.length - 1] = firstElement;

  return array;
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const currentYear = Number(prompt('Em que ano estamos?'));
  const birthYear = Number(prompt('Em que ano você nasceu?'));
  const docMadeYear = Number(prompt('Em que ano seu RG foi emitido?'));

  const personAge = currentYear - birthYear;
  const docTime = currentYear - docMadeYear;
  let result = false;

  if (personAge <= 20 && docTime >= 5) {
    console.log(!result);
  }
  else if (personAge <= 50 && docTime >= 10) {
    console.log(!result);
  }
  else if (personAge > 50 && docTime >= 15) {
    console.log(!result);
  }
  else {
    console.log(result);
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const result = false;
  
  if (ano % 400 === 0) {
    return !result;
  }
  else if (ano % 4 === 0 && ano % 100 !== 0) {
    return !result;
  }

  return result;
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const condition1 = prompt('Você tem mais de 18 anos?');
  const condition2 = prompt('Você possui ensino médio completo?');
  const condition3 = prompt('Você possui disponibilidade exclusiva durante os horários do curso?');
  const result = false;

  if (condition1 === 'sim' && condition2 === 'sim' && condition3 === 'sim') {
    console.log(!result);
  }
  else {
    console.log(result);
  }
}