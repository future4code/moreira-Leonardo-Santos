import app from './app';
import { News, User } from './types/types';
import { getSubs } from './ex1';
import { getSubsArrow } from './ex2';
import { getSubsTyped } from './ex3';
import { createNews } from './ex4';
import { sendNotfications } from './ex5';
import { sendNotficationsPromiseAll } from './ex6';

const newNews: News = {
    title: "Noticia teste páh",
    content: "danondan ianwiun dnainwd ui n awmdiamiwmdankbf",
    date: Date.now()
};

const users: User[] = [
      {
        id: '4188567e-27c6-446c-8b4e-1bb1b92b6292',
        name: 'Syrio Forel, o de Braavos',
        email: 'syrio@labenu.com.br'
      },
      {
        id: '44671e4b-1e41-4247-ad97-b2da9180aac4',
        name: 'Johnny, o brabo',
        email: 'joao@labenu.com.br'
      },
      {
        id: '47bb6354-41fd-4f40-9601-8332e2a96f31',
        name: 'Titanic, o barco',
        email: 'titanic@labenu.com.br'
      },
      {
        id: '555cabfd-2e18-43f6-8855-a2241c7d2e44',
        name: 'Yamaha Trbx305 5 cordas, o Baixo',
        email: 'baixo.yamaha@labenu.com.br'
      },
      {
        id: '5c1b83bb-ce45-455a-ae3e-e5c6acf176db',
        name: 'Louis, o Braille',
        email: 'braille@labenu.com.br'
      },
      {
        id: '95cad7c6-5b0e-43e7-a74e-fb0a280bdaec',
        name: 'Ba, o Bário',
        email: 'barium@labenu.com.br'
      },
      {
        id: 'c5d5c6fb-96a4-478b-8376-b5afe07905de',
        name: 'Beedle, o bardo',
        email: 'beedle@labenu.com.br'
      },
      {
        id: 'd32f3136-2f0b-4956-a739-11092dc703f5',
        name: 'Maria, a do Bairro',
        email: 'maria@labenu.com.br'
      },
      {
        id: 'd4d966af-8750-4b61-85dd-03e7ae23ddfd',
        name: 'Darvas, o barbado',
        email: 'reidocarrinho@labenu.com.br'
      },
      {
        id: 'd5252df5-05bd-4989-9d92-783af5fbcae0',
        name: 'Paola, a Bracho',
        email: 'paola@labenu.com.br'
      },
      {
        id: 'e490871e-557f-40c8-902e-f2244bdc1f79',
        name: 'Principe, o mestiço',
        email: 'Rick@Severus.com.br'
      },
      {
        id: 'eb98add9-6981-41d6-8d9f-d63258486296',
        name: 'País, o Basco',
        email: 'pais.basco@labenu.com.br'
      }
];

const main = async (): Promise<void> => {
    // console.log( await getSubs());
    // console.log( await getSubsArrow());
    // console.log( await getSubsTyped());
    // await createNews(newNews);
    // await sendNotfications(users, "test");
    // await sendNotficationsPromiseAll(users, "test");
};

main();
app;