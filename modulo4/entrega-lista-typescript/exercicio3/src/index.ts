enum GENERO {
    ACAO="ação",
    DRAMA="drama",
    COMEDIA="comédia",
    ROMANCE="romance",
    TERROR="terror"
}

const organizeInfo = (movie: string, launch: number, movieTypes: any, grade?: number) => {

    type Movie = {
        nome: string,
        anoLancamento: number,
        genero: any,
        pontuação: number | undefined  
    }

    const movieInfo: Movie = {
        nome: movie,
        anoLancamento: launch,
        genero: movieTypes,
        pontuação: grade
    };

    return movieInfo
};
console.log(organizeInfo("Duna", 2021, GENERO.ACAO, 74));