import connection from "../controller/connection";
import { Product } from "../Models/Product";

const table: string = 'labecommerce_products';

export const insertProductDataBase = async (product: Product): Promise<void> => {
    try {
        await connection(table).insert(product);
    } 
    catch (error: any) {
        console.log(error.message || error.sqlMessage);
    };
};

export const getProductDataBase = async () => {
    try {
        const data = await connection(table).select();    
        return data;
    } 
    catch (error: any) {
        console.log(error.message || error.sqlMessage);
    }
}
;
export const getProductByIdDataBase = async (id: string) => {
    try {
        const data = await connection(table).where('id', id);    
        return data[0];
    } 
    catch (error: any) {
        console.log(error.message || error.sqlMessage);
    }
};