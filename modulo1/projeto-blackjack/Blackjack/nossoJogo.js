/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

// Início do meu código

// função para iniciar um jogo, seja qual for -- os parametros são o nome do jogo -> string; e a função do jogo -> função.
const startGame = (gameName, game) => {
   alert(`Boas vindas ou jogo de ${gameName}!`);
   console.log(`Boas vindas ou jogo de ${gameName}!`);

   const usrChoice = confirm('Quer iniciar uma nova rodada?');

   let msg = 'O jogo acabou.';

   if (usrChoice === true) {
      return game();
   }
   else {
      return msg;
   }

};

const blackjackAgainstPc = () => {
   let userPts = 0;
   let machinePts = 0;
   let userUsedCards = '';
   let machineUsedCards = '';
   let playLog = '';
   let playResult = '';
   let finalMsg = '';

   while (userPts <= 12) {
      let userCard = comprarCarta();

      userUsedCards += ` ${userCard.texto}`

      userPts += Number(userCard.valor);
   }
   while (machinePts <= 12) {
      let machineCard = comprarCarta();

      machineUsedCards += ` ${machineCard.texto}`

      machinePts += Number(machineCard.valor);
   }

   playLog = `Usuário - cartas: ${userUsedCards}  - pontuação ${userPts}\nComputador - cartas: ${machineUsedCards}  - pontuação ${machinePts}`;

   if (userPts === machinePts) {
      playResult = 'Empate!';
   }
   else if (userPts > machinePts && userPts < 21) {
      playResult = 'O usuário ganhou!';
   }
   else if (userPts < machinePts && machinePts < 21) {
      playResult = 'O computador ganhou!';
   }
   else if (userPts > 21) {
      playResult = 'Jogador estourou! O computador venceu!'
   }
   else if (machinePts > 21) {
      playResult = 'Computador estourou! O jogador venceu!'
   }

   finalMsg = `${playLog}\n${playResult}`;

   console.log(finalMsg);

   return finalMsg;
};

startGame('Blackjack', blackjackAgainstPc);