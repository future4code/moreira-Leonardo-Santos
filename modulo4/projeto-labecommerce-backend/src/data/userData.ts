import connection from "../controller/connection";
import { User } from "../Models/User";

const table = 'labecommerce_users';

export const insertUserDataBase = async (user: User): Promise<void> => {
    try {
        await connection(table).insert(user);
    } 
    catch (error: any) {
        console.log(error.message || error.sql.message);
    }
    finally {
        connection.destroy();
    };
};

export const getUserDataBase = () => {
    try {
        const data = connection(table).select();    
        return data;
    } 
    catch (error) {
        console.log(error);
    }
};