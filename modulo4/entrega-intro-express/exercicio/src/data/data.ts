import { User, Post } from '../types/types';

export const users: User[] = [
    {
        id: 1,
        name: 'Leo',
        email: 'leo.teste@teste.com',
        phone: '(41)99999-9999',
        website: 'leochristen.com'
    },
    {
        id: 2,
        name: 'Isa',
        email: 'Isa.teste@teste.com',
        phone: '(41)98989-8989',
        website: 'isadaru.com'
    },
    {
        id: 3,
        name: 'Caê',
        email: '',
        phone: '',
        website: ''
    },
    {
        id: 4,
        name: 'Hórus',
        email: '',
        phone: '',
        website: ''
    },
    {
        id: 5,
        name: 'Vini',
        email: 'vini.teste@teste.com',
        phone: '(41)98798-7978',
        website: 'vinichristen.com'
    }
];

// Exercício 6
/* Creio que seja melhor criar o array de posts em separado, por se tratarem de posts de todos os usuários,
 * dito isso acredito ser bom também criar uma array de posts para cada usuário assim tendo como armazena-los
 * em uma galeria do usuário por exemplo. 
 */

export const posts: Post[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        "userId": 2,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
      },
      {
        "userId": 3,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
      },
      {
        "userId": 4,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
      },
      {
        "userId": 5,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
      }
]