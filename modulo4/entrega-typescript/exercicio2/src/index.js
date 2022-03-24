"use strict";
// const readline: any = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
exports.__esModule = true;
// readline.question('deu certo? ', (res: string) => {
//     switch (res) {
//         case 'sim':
//             console.log('Deu boaa!');
//             break;
//         default:
//             console.log('num deu ;-;');
//             break;
//     }
//     readline.close();
// });
var readline = require("readline");
var showFavColors = function () {
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Insira sua primeira cor favorita: ', function (cor1) {
        rl.question('Insira a sua segunda cor favorita: ', function (cor2) {
            rl.question('Insira sua terceira cor favorita: ', function (cor3) {
                var res = [cor1, cor2, cor3];
                console.log(res);
                rl.close();
            });
        });
    });
};
showFavColors();
