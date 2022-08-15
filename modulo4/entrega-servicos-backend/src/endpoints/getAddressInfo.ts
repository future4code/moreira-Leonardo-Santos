import { Address, AddressRaw } from "../types/types";
import { Request, Response } from "express";
import getRequest from "../services/getRequest";
import baseUrl from "../constants/baseUrl";
import toAddress from "../functions/toAddress";


// Exercício 1
const getAddressInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const {cep} = req.params;
        const response: AddressRaw = await getRequest(`${baseUrl}${cep}/json/`);
        const result: Address = toAddress(response);
        res.status(200).send(result);
    } 
    catch (error) {
        res.status(500).send('Internal error');
    }
}
export default getAddressInfo;