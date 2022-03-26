const howMuchAnagrams = (word: string): number => {
    let factor: number = 1;

    for (let i = 0; i < word.length; i++) {
        factor *= i+1;
    }

    return factor;
};
console.log(howMuchAnagrams(process.argv[2]));