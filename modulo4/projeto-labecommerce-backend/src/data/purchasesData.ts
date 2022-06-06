import connection from "../controller/connection";
import { Purchase } from "../Models/Purchase";

const table = 'labecommerce_purchases';

export const insertPurchaseDataBase = async (purchase: Purchase): Promise<void> => {
    try {
        await connection(table).insert(purchase);
    } 
    catch (error: any) {
        console.log(error.message || error.sqlMessage);
    }
};

export const getPurchasesDataBase = async (user_id: string) => {
    try {
        const data = await connection(table).where({user_id}).select();    
        return data;
    } 
    catch (error: any) {
        console.log(error.message || error.sqlMessage);
    }
};