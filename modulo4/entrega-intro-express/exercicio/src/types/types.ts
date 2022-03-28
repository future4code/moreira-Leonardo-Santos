//Exercicio2
type StrOrNum = number | string;

export type User = {
    id: StrOrNum,
    name: string,
    phone: string,
    email: string,
    website: string
};

export type Post = {
    id: StrOrNum,
    userId: StrOrNum,
    title: string,
    body: string
};