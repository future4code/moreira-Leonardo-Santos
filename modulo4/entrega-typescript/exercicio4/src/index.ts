const comparaDoisNumeros = (num1: number, num2:number) => {
    return num1 > num2 ? num1 - num2 : num2 - num1;
};
console.log(comparaDoisNumeros(Number(process.argv[2]), Number(process.argv[3])));
