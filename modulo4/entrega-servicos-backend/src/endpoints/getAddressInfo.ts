import { Address } from "../types/types";
import { Request, Response } from "express";

const getAddressInfo = (req: Request, res: Response): Address => {
    try {
       const result = 'something'; 
    } 
    catch (error) {
        res.status(500).send('Internal error');
    }

    return;
}