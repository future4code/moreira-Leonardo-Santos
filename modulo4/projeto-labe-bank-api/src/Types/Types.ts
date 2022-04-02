export type Extract = {
    price: number,
    date: string,
    description: string
};

export type User = {
    id: string,
    name: string,
    cpf: string,
    birth: string,
    balance: number,
    extract: Extract[]
};