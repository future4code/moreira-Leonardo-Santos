export type Address = { 
    cep: string,
    rua: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string
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
}