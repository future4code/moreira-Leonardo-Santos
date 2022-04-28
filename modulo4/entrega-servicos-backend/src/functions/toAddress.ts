import { Address, AddressRaw } from "../types/types";

const toAddress = (info: any): Address => {
    const result: Address = {
        logradouro: info.logradouro,
        bairro: info.bairro,
        cidade: info.localidade,
        estado: info.uf
    };
    return result;
};
export default toAddress;