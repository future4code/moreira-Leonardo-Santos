import { getProductByIdDataBase } from "../data/productData";
import { getPurchasesDataBase, insertPurchaseDataBase } from "../data/purchasesData";
import { Purchase } from "../Models/Purchase";
import generateId from "../services/generateId";

export const createNewPurchase = async ( user_id:string, product_id:string, quantity: number) => {

    const {price} = await getProductByIdDataBase(product_id);

    const id: string = generateId();
    
    const total_price = price * quantity;

    const purchase: Purchase = {
        id,
        user_id,
        product_id,
        quantity,
        total_price
    };
    return purchase;
};

export const insertPurchase = async (purchase: any) => {
    await insertPurchaseDataBase(purchase);
    return;
};

export const getUserPurchasesList = async (user_id: string) => {
    const users = await getPurchasesDataBase(user_id);
    return users;
};