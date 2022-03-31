const showBirthDate = (name: string, birthDate: string) => {
    const bDateSplit = birthDate.split('/');

    return `Olá me chamo ${name}, nasci no dia ${bDateSplit[0]} do mês de ${bDateSplit[1]} do ano de ${bDateSplit[2]}`;
};
console.log(showBirthDate(process.argv[2], process.argv[3]));