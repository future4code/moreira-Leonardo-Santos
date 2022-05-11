import { Request, Response } from "express";
import { createNewPurchase, insertPurchase, getUserPurchasesList } from "../business/purchasesBusiness";
import { getUserByIdDataBase } from "../data/userData";

export const placeOrder = async (req: Request, res: Response) => {
    let statusCode = 400;
    try {
        const { user_id, product_id, quantity } = req.body;
        
        if (!user_id || !product_id || !quantity) {
            throw new Error('Informações faltantes: verifique o id do usuário, do produto e a quantidade de produtos comprados');
        }

        const newPurchase = await createNewPurchase( user_id, product_id, quantity);

        insertPurchase(newPurchase);
        statusCode = 201;
        res.status(statusCode).send('Order sent');
    } 
    catch (error: any) {
        if (statusCode === 400) {
            res.status(statusCode).send(error.message)
        }
        else {
            res.status(500).send('Internal error, try again');
        }
    }
};

export const getUserOrders = async (req: Request, res: Response) => {
    let statusCode = 400;
    try {
        const {user_id} = req.params;

        const user = await getUserByIdDataBase(user_id);

        if (!user) {
            statusCode = 404;
            throw new Error('Usuário não encontrado');
        }

        const purchases = await getUserPurchasesList(user_id);
        statusCode = 200;
        res.status(statusCode).send(purchases);
    } 
    catch (error: any) {
        if (statusCode === 404) {
            res.status(statusCode).send(error.message);
        }
        else {
            res.status(500).send('Internal error, try again');
        }    
    }
};