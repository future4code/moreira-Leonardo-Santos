import React, {useState, useEffect} from 'react';
import baseUrl from './baseUrl.js';
import apiRequirement from './useApiRequirement.js';

const App = () => {

  // /* Exercício 1 */

  // const retornaPessoa = () => {
  //   const pessoa = {
  //     nome: 'Leo',
  //     idade: 24,
  //     profissao: 'estudante'
  //   };

  //   return pessoa;
  // };

  // console.log(retornaPessoa());

  // const pessoaRetornada = retornaPessoa();

  // /* método tradicional de declaração */

  // // const nomePessoa = pessoaRetornada.nome;
  // // const idadePessoa = pessoaRetornada.idade;
  // // const profPessoa = pessoaRetornada.profissao;

  // /* método de desestruturação */

  // const {nome, idade, profissao} = pessoaRetornada;

  // console.log(nome, '\n', idade, '\n', profissao);

  // /* Exercício 2 */

  // const retornaArray = () => {
  //   const arr = [
  //     'sabão',
  //     'manteiga',
  //     'leite',
  //     'ovo'
  //   ]

  //   return arr;
  // };

  // console.log(retornaArray());

  // const listaDeCompras = retornaArray();

  // /* método tradicional */

  // // const item1 = listaDeCompras[0];
  // // const item2 = listaDeCompras[1];
  // // const item3 = listaDeCompras[2];
  // // const item4 = listaDeCompras[3];

  // /* metodo desestruturação */

  // const [item1, item2, item3, item4] = listaDeCompras;

  // console.log(item1, item2, item3, item4);

  /* Exercício 3 */

  const wizards = apiRequirement(`${baseUrl}`);
  const staff = apiRequirement(`${baseUrl}staff`);

  const list = wizards !== undefined && wizards.map((wizard, index) => {
    return (<li key={index}>{wizard.name}</li>)
  });
  const staffList = staff !== undefined && staff.map((person, index) => {
    return (<li key={index}>{person.name}</li>)
  });

  return (
    <>
      <ol>
        {list}
      </ol>
      <ol>
        {staffList}
      </ol>
    </>
  );
};

export default App;
