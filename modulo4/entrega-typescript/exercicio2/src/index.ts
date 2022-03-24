import * as readline from 'readline';

const showFavColors = (): void => {
    const rl: any = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Insira sua primeira cor favorita: ', (cor1: string) => {
        rl.question('Insira a sua segunda cor favorita: ', (cor2: string) => {
            rl.question('Insira sua terceira cor favorita: ', (cor3: string) => {
                const res: string[] = [cor1, cor2, cor3];
                
                console.log(res);
                rl.close();
            });
        });
    });
};
showFavColors();