export type Address = { 
    logradouro: string,
    bairro: string,
    cidade: string,
    estado: string
};

export type AddressRaw = {
    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
};

export type user = {
    id: string
    name: string
    nickname: string
    email: string
    address: string
};