const printType = (value: any): void => {
    console.log(typeof value);
};
printType(process.argv[2]);