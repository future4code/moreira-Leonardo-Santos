// Exercícios de interpretação de código

//1->
/* a->
 * - O código pede ao usuário por um número, e testa se o restante desse número dividido por 2 é igual a 0 ou não;
 */
/* b->
 * - Os números que passam no testes são números pares;
 */
/* c-> 
 * - Para qualquer número que não seja par.
 */

//2->
/* a->
 * - Para mostrar para a pessoa operadorea de caixa a fruta e o valor dela em reais.
 */
/* b->
 * - O preço da fruta Maçã é R$ 2.25
 */
/* c->
 * - o resultado impresso seria -> O preço da fruta Pêra é R$ 5
 */

//3->
/* a->
 * - Está pedindo por um número ao usuário atravez no prompt() e transformando em um número usando o Number() e guardando na variável number;
 */
/* b->
 * - Caso o número seja 10 ele passa no teste, pois é maior que 0 -> resultado do console -> Esse número passou no teste '\n' Essa mensagem é secreta!!! ; 
 * - Caso o número seja -10 ele não passa no teste -> resultdo no console -> mensagem is not defined  
 */
/* c->
 * Sim como dito a cima o erro se dara pelo fato de a mensagem ter sido declarada dentro do escopo da condicional, logo tudo que não ative a condicional cairá no escopo global e resultará em erro no console.
 */

// Exercícios de escrita de código

//1->
/* a e b->
 */
const usrAge = Number(prompt('Qual é a sua idade?'));

/* c->
 */
const canDrive = (age) => {
    let msg = 'Você não pode dirigir'; 

    if (age >= 18) {
        msg = 'Você pode dirigir'
    }

    return console.log(msg);
};

canDrive(usrAge);

//2->
const classTurn = prompt('Em que turno você estuda? se for maturino digite M, caso seja vespertino digite V e se for noturno digite N:').toUpperCase();

const whitchGreet = (turn) => {
    let greet = 'Boa Noite!'

    if (turn === 'M') {
        greet = 'Bom Dia!';
    }
    else if (turn === 'V') {
        greet = 'Boa Tarde!';
    }

    return console.log(greet); 
};

whitchGreet(classTurn);

//3->
const whitchGreetSwitchCase = (turn) => {
    let msg = '';
    
    switch (turn) {
        case 'M':
            msg = 'Bom Dia!';
            break;
        case 'V':
            msg = 'Boa Tarde!';
            break;
        default:
            msg = 'Boa Noite!';
            break;
    }

    return console.log(msg);
};

whitchGreetSwitchCase(classTurn);

//4->
const movieType = prompt('Qual é o gênero do filme?').toLowerCase().trim();
const ticketValue = Number(prompt('Quanto tá a entrada hj?'));

const canWeWatchIt = (genre, cost) => {
    msg = 'Escolha outro filme :('

    if (genre === 'fantasia' && cost < 15) {
        msg = 'Bom filme!'
    }

    return console.log(msg);
};

canWeWatchIt(movieType, ticketValue);

// Desafios

//1->


const canWeWatchItChellangeVersion = (genre, cost) => {
    msg = 'Escolha outro filme :('

    if (genre === 'fantasia' && cost < 15) {
        msg = 'Bom filme!'
    }

    const snack = prompt('Qual lanchinho você está levando?');

    if (snack === 'nenhum' ||  snack === 'nada' || snack === undefined) {
        return console.log(msg);
    }
    else {
        msg = `${msg} Aproveite o seu ${snack}`;
    }

    return console.log(msg);
};

canWeWatchItChellangeVersion(movieType, ticketValue);

//2->

// user info
const nome = prompt('Qual é seu nome?');
const gameType = prompt('Se esse jogo é Internacional digite "IN", caso seja um jogo Doméstico digite "DO":').toUpperCase();
const gameStatus = prompt('Qual é a etapa do jogo atual: "SF" indica semi-final; "DT" indica decisão de terceiro lugar; e "FI" indica final').toUpperCase();
const category = Number(prompt('Qual é a categoria desse jogo (de 1 a 4):'));
const howMuchTickets = Number(prompt('Qual é o número de bilhetes que você deseja comprar?'));


const howMuchIWouldPay = (usrName, typeOfGame,currentStatus, gameCategory, numOfTickets) => {
    // system info
    const dollar =  4.10;

    const domesticTicketsCost = {
        // tickets values Semi Finais
        category1TicketValueDOSF: 1320.00,
        category2TicketValueDOSF: 880.00,
        category3TicketValueDOSF: 550.00,
        category4TicketValueDOSF: 220.00,
        // tickets values Decisão 3° lugar
        category1TicketValueDODT: 660.00, 
        category2TicketValueDODT: 440.00,
        category3TicketValueDODT: 330.00,
        category4TicketValueDODT: 170.00,
        // tickets values Finais
        category1TicketValueDOFI: 1980.00,
        category2TicketValueDOFI: 1320.00,
        category3TicketValueDOFI: 880.00,
        category4TicketValueDOFI: 330.00
    }
    const internacionalTicketsValue = {
        // tickets values Semi Finais -Internacionais 
        category1TicketValueINSF: domesticTicketsCost.category1TicketValueDOSF * dollar, 
        category2TicketValueINSF: domesticTicketsCost.category2TicketValueDOSF * dollar,
        category3TicketValueINSF: domesticTicketsCost.category3TicketValueDOSF * dollar,
        category4TicketValueINSF: domesticTicketsCost.category4TicketValueDOSF * dollar,
        // tickets values Decisão 3° lugar -Internacionais
        category1TicketValueINDT: domesticTicketsCost.category1TicketValueDODT * dollar, 
        category2TicketValueINDT: domesticTicketsCost.category2TicketValueDODT * dollar,
        category3TicketValueINDT: domesticTicketsCost.category3TicketValueDODT * dollar,
        category4TicketValueINDT: domesticTicketsCost.category4TicketValueDODT * dollar,
        // tickets values Finais -Internacionais
        category1TicketValueINFI: domesticTicketsCost.category1TicketValueDOFI * dollar, 
        category2TicketValueINFI: domesticTicketsCost.category2TicketValueDOFI * dollar,
        category3TicketValueINFI: domesticTicketsCost.category3TicketValueDOFI * dollar,
        category4TicketValueINFI: domesticTicketsCost.category4TicketValueDOFI * dollar
    }

    let msg = '';
    const fetchInSystem = `category${gameCategory}TicketValue${typeOfGame}${currentStatus}`;
    let valueEachTicket = 0;
    
    if (typeOfGame === 'DO') {
        valueEachTicket = domesticTicketsCost[fetchInSystem];
    }
    else {
        valueEachTicket = internacionalTicketsValue[fetchInSystem];    
    }

    const totalCost = valueEachTicket * numOfTickets;

    let toUsrGameType = '';
    let toUsrGameStatus = '';

    switch (typeOfGame) {
        case 'DO':
            toUsrGameType = 'Doméstico'
            break;

        default:
            toUsrGameType = 'Internacional'
            break;
    }
    switch (currentStatus) {
        case 'SF':
            toUsrGameStatus = 'Semifinais';
            break;
        case 'DT':
            toUsrGameStatus = 'Decisão de 3° lugar';
            break;
        default:
            toUsrGameStatus = 'Final';
            break;
    }
    
    
    msg = `Ola ${usrName}, você comprou ${numOfTickets} ingressos de ${gameCategory} categoria, cada um no valor de ${valueEachTicket.toFixed(2)}, para a(s) ${toUsrGameStatus} do jogo ${toUsrGameType}, totalizando o valor de R$${totalCost.toFixed(2)}`;

    return console.log(msg);
};

howMuchIWouldPay(nome, gameType, gameStatus, category, howMuchTickets);