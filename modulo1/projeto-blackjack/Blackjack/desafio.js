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
const blackjackAgainstPcChellange = () => {
   let userPts = 0;
   let machinePts = 0;
   let userUsedCards = [];
   let machineUsedCards = [];
   let buyMore = false;
   let playLog = '';
   let playResult = '';
   let finalMsg = '';

   while (userPts <= 12 || machinePts <= 12) {
      let userCard = comprarCarta();
      let machineCard = comprarCarta();

      if (userUsedCards.length < 2) {
         userUsedCards.push(userCard.texto);
         userPts += Number(userCard.valor);
      }
      
      machineUsedCards.push(machineCard.texto);
      machinePts += Number(machineCard.valor);

      if (userUsedCards[0] === 'A' && userUsedCards[1] === 'A') {
         userPts = 0;
      }

      if (machineUsedCards[0] === 'A' && machineUsedCards[1] === 'A') {
         machinePts = 0;
      }

      if (userUsedCards.length >= 2 && machineUsedCards.length >= 2) {
         buyMore = confirm(`Suas cartas são ${userUsedCards.join(' ')}. A carta revelada do computador é ${machineUsedCards[0]}\nDeseja comprar mais uma carta?`);

         if (buyMore === true) {
            userUsedCards.push(userCard.texto);
            userPts += Number(userCard.valor);
         }
      }
   }

   playLog = `Usuário - cartas: ${userUsedCards.join(' ')}  - pontuação ${userPts}\nComputador - cartas: ${machineUsedCards.join(' ')}  - pontuação ${machinePts}`;

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


   finalMsg = (`${playLog}\n${playResult}`);

   alert(finalMsg);
   console.log(finalMsg);

   return finalMsg;
};

startGame('Blackjack', blackjackAgainstPcChellange);