const checkIdStatus = (bDate: string, idDate: string): boolean => {
    const bDateInfo: number[] = bDate.split('/').map((num) => {return Number(num)});
    const idDateInfo: number[] = idDate.split('/').map((num) => {return Number(num)});
    const currentYear: number = 2022; 

    const personAge: number = currentYear - bDateInfo[2];
    const idTime: number = currentYear - idDateInfo[2];
    
    if (personAge <= 20 && idTime >= 5) {
        return true
    }
    else if ((personAge > 20 && personAge <= 50) && idTime >= 10) {
        return true;
    }
    else if (personAge > 50 && idTime >= 15) {
        return true;
    }
    else {
        return false;
    }    
}; 

let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Insira sua data de nascimento nesse formato dd/mm/aaaa: ', (birthDate: string) => {
    rl.question('Insira a data de emissão da sua carteira de identidade: ', (idDate: string) => {
        console.log('\x1b[32m',`Precisa renovar? ${checkIdStatus(birthDate, idDate)}`);
        rl.close();
    });
});