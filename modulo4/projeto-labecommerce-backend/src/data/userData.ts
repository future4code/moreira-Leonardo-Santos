import connection from "../controller/connection";
import { User } from "../Models/User";

const table = 'labecommerce_users';

export const insertUserDataBase = async (user: User): Promise<void> => {
    try {
        await connection(table).insert(user);
    } 
    catch (error: any) {
        console.log(error.message || error.sqlMessage);
    }
};

export const getUserDataBase = async () => {
    try {
        const data = await connection(table).select();    
        return data;
    } 
    catch (error: any) {
        console.log(error.message || error.sqlMessage);
    }
};

export const getUserByIdDataBase = async (id: string) => {
    try {
        const data = await connection(table).where('id', id);    
        return data[0];
    } 
    catch (error: any) {
        console.log(error.message || error.sqlMessage);
    }
};