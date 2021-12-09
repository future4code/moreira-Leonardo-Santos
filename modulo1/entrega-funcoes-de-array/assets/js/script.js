// Exercícios de interpretação de código:

//1->
/* a->
 * - {nome: 'Amanda Rangel', apelido: 'Mandi'} 0 {{ nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo"}}
 * - {nome: "Laís Petra", apelido: "Laura"} 1 {{ nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo"}}
 * - {nome: "Letícia Chijo", apelido: "Chijo"} 2 {{ nome: "Amanda Rangel", apelido: "Mandi" },
  { nome: "Laís Petra", apelido: "Laura" },
  { nome: "Letícia Chijo", apelido: "Chijo"}}
 */

//2->
/* a->
 * - {'Amanda Rangel', 'Laís Petra', 'Letícia Chijo'}
 */

//3->
/* a->
 * - {'Mandi', 'Laura'}
 */

// Exercícios de escrita de código:

//1->
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
];

/* a->
 */
const petNames = pets.map(getName = (item, index, arr) => {
    return arr[index].nome;
});

console.log(petNames);

/* b->
 */
const salsichinhas = pets.filter(getRace = (item, index, arr) => {
    return arr[index].raca === 'Salsicha';
});

console.log(salsichinhas);

/* c->
 */
const promoListMsgs = pets.map(sendMessage = (item, index, arr) => {
    const msg = 'Você ganhou um cupom de desconto de 10% para tosar o/a';

    if (arr[index].raca === 'Poodle') {
        return `${msg} ${arr[index].nome}!`;
    }
    return '';
}).filter(getOnlyPromo = (item, index, arr) => {
    return arr[index];
});

console.log(promoListMsgs);

//2->
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ];

/* a->
 */
const listaNomes = produtos.map(getName = (item, index, arr) => {
    return arr[index].nome;
});

console.log(listaNomes);

/* b->
 */
const nomesEDescontos = produtos.map((item, index, arr) => {
    const desconto = arr[index].preco * 5 / 100;

    return {nome: arr[index].nome, preco: (arr[index].preco - desconto).toFixed(2)};
});

console.log(nomesEDescontos);
// console.log(produtos);

/* c->
 */
const sobeOTrago = produtos.filter((item, index, arr) => {
    return arr[index].categoria === 'Bebidas';
});

console.log(sobeOTrago);

/* d->
 */
const ypes = produtos.filter((item, index, arr) => {
    return arr[index].nome.includes('Ypê');
});

console.log(ypes);

/* e->
 */
const ypePromo = ypes.map((item, index, arr) => {
    return `Compre ${arr[index].nome} por ${arr[index].preco.toFixed(2)}`;
});

console.log(ypePromo);

// Desafios

//1->
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

/* a->
 */
const pokeNames = pokemons.map((item, index, arr) => {
    return arr[index].nome;
}).sort();

console.log(pokeNames);

/* b->
 */
const pokeTypes = pokemons.map((item, index, arr) => {
    return arr[index].tipo;
}).filter((item, index, arr) => {
    if (arr.indexOf(item) === index) {
        return item;
    }
});

console.log(pokeTypes);