// Exercícios de interpretação de código:

// 1 ->
/*  - Matheus Nachtergaele
 *  - Virginia Cavendish
 *  - {canal: "Globo", horario: "14"}
 */

// 2 -> 
/*  a.
 *   - {nome: "juca", idade: 3, raca: "SRD"}
 *   - {nome: "juba", idade: 3, raca: "SRD"}
 *   - {nome: "jubo", idade: 3, raca: "SRD"}
 */
/*  b.
 *   - ela realisa uma cópia do objeto para ser trabalhada, sem que o objeto em si seja alterado.
 */

// 3 ->
/*  a.
 *   - false
 *   - undefined
 */
/*  b.
 *   - por que a função retorna ao console o valor da propriedade que representa uma chave no objeto pessoa neste caso.
 */

// Exercícios de escrita de código:

// 1 ->
/*  a.
 */ 
const pessoa = {
    nome: 'Isabelle Daru',
    apelidos: ['Daru', 'Isa', 'Belle']
};

const greet = (person) => {
  return console.log(`Eu sou ${person.nome}, mas pode me chamar de: ${person.apelidos[0]}, ${person.apelidos[1]} ou ${person.apelidos[2]}`)
};

greet(pessoa);

/*  b.
 */
const novaPessoa = {
    ...pessoa,
    apelidos: ['Isinha', 'Belinha', 'Mãe']
};

greet(novaPessoa);

// 2 ->
/*  a.
 */
const pessoa1 = {
    nome: 'Isa',
    idade: 24,
    profissão: 'Bióloga'
};

const pessoa2 = {
    ...pessoa1,
    nome: 'Leo',
    profissão: 'Desenvolvedora'
};

/*  b.
 */
const getInfo = (person) => {
    const infoList = [];

    infoList.push(person.nome);
    infoList.push(person.nome.length);
    infoList.push(person.idade);
    infoList.push(person.profissão);
    infoList.push(person.profissão.length);

    console.log(infoList);
    return infoList;
}

getInfo(pessoa1);
getInfo(pessoa2);

// 3 -> 
/*  a.
 */
const carrinho = [];

/*  b.
 */
const fruta1 = {
    nome: 'maçã',
    disponibilidade: true
};
const fruta2 = {
    nome: 'banana',
    disponibilidade: true
};
const fruta3 = {
    nome: 'mamão',
    disponibilidade: true
};

/*  c.
 */
const buy = (product) => {
    return carrinho.push(product);
};

buy(fruta1);
buy(fruta2);
buy(fruta3);

/*  d.
 */
console.log(carrinho);

// Desafioooos!!!

// 1 ->
const askInfo = () => {
    const name = prompt('Qual é seu nome?');
    const age = Number(prompt('Qual é sua idade?'));
    const work = prompt('Qual é sua profissão?');
    const pessoa = {};
        
    pessoa.name = name;
    pessoa.age = age;
    pessoa.work = work;

    console.log(pessoa, typeof pessoa);

    return pessoa;
}

askInfo();

// 2 ->
const askInfoAboutMovie = () => {
    const titulo = prompt('Qual é o título do filme?');
    const anoLancamento = Number(prompt('Qual é o ano de lançamento?'));

    const filme = {};
    filme.title = titulo;
    filme.launchYear = anoLancamento;

    return filme;
};

const filme1 = askInfoAboutMovie(); 
const filme2 = askInfoAboutMovie();

const whichOneIsOlder = (movie1, movie2) => {
    const msg1 = 'O primeiro filme foi lançado antes do segundo?'
    const msg2 = 'O primeiro filme foi lançado no mesmo ano do segundo?';

    const answer1 = movie1.launchYear < movie2.launchYear;
    const answer2 = movie1.launchYear === movie2.launchYear;

    return console.log(`${msg1} ${answer1}\n${msg2} ${answer2}`);
};

whichOneIsOlder(filme1, filme2);

// 3 ->
const stockControl = (product) => {
    return console.log(!product.disponibilidade);
};

stockControl(fruta1);
stockControl(fruta2);
stockControl(fruta3);