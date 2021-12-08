// // Criando um Objeto:

// // declarando

// const /*tipo de vaiável*/ pessoa /*nome do objeto*/= {
//     nome /*chave*/ : 'Leo' /*valor relacionado a chave*/,
//     idade: 24,
//     endereco: 'Rua Honduras 573 Colombo/PR',
//     estudante: true,
//     jogoFavorito: 'ESO',
// }; /*escopo do objeto*/

// console.log(pessoa.nome);
// console.log(pessoa.idade);
// console.log(pessoa.endereco);
// console.log(pessoa.estudante);
// console.log(pessoa.jogoFavorito);

// pessoa.nome = 'Isa';
// pessoa.jogoFavorito = 'The Legend of Zelda';

// console.log(pessoa['nome']);
// console.log(pessoa['idade']);
// console.log(pessoa['endereco']);
// console.log(pessoa['estudante']);
// console.log(pessoa['jogoFavorito']);

// funções passadas dentro de um Objeto se chamam Métodos -> ex.: Métodos de DOM, Métodos Math, Metodos de Objetos e Strings.

// const casa = {
//     localizacao: 'Rua Honduras 573 Colombo/PR',
//     cor: 'um dia foi vermelha',
//     quartos: 2,
//     lavanderia: true,
//     banheiros: 1,
//     numMoradores: 6,
//     infoMoradores: [
//         {
//             nome: 'Isa',
//         }, 
//         {
//             nome: 'Leo',
//         },
//         {
//             nome: 'Caê',
//         },
//         {
//             nome: 'Horus',
//         },
//         {
//             nome: 'Gudão',
//         },
//         {
//             nome: 'Lilo',
//         }
//     ],
// };

// // tentativa de loop;
// casa.infoMoradores.forEach(pessoa => {
//     console.log(pessoa['nome']);
// });

// for (element in casa) {
//     console.log(element);
// };

// // objeto da aula

// const filme = {
//     diretor: "Wagner Moura",
//     titulo: "Marighella",
//     lancamento: 2021,
//     elenco: ["Bella Carnero", "Seu Jorge", "Humberto Carrão", "Bruno Gagliasso"], 
//     visto: false
// };

// filme.personagens = ['bla', 'ble', 'pcoyo', 'lola', 'éle', 'pato', 'blu']

// console.log(filme);

// console.log(filme.elenco[0], filme.personagens[0]);
// console.log(filme.elenco[1], filme.personagens[1]);
// console.log(filme.elenco[2], filme.personagens[2]);
// console.log(filme.elenco[3], filme.personagens[3]);
// console.log(filme.elenco[4], filme.personagens[4]);

// filme.elenco[0] = 'Xuxa';

// console.log(`O nome do filme é ${filme.titulo}. Seus personagens são ${filme.personagens[0]}, ${filme.personagens[1]} e ${filme.personagens[2]}.`);

// // exercicio 4

// const pessoa = {
//     nome: "Tayanne",
//     sobrenome: "Novais",
//     idade: 26,
//     genero_musical: "Red Hot Chili Peppers" 
// };

// const novaPessoa = (pessoa) => {
//     const novaPessoa = {
//         ...pessoa,
//         nome: 'Leo',
//         sobrenome: 'Christen',
//         comidasFav: ['comidas da terra', 'massas', 'lanches', 'laricas'],
//         bixos: [
//             {
//                 especie: 'cachorro',
//                 nome: 'gudão',
//             },
//             {
//                 especie: 'cágado',
//                 nome: 'lilo'
//             }
//         ],
//     }

//     console.log(novaPessoa);
// };