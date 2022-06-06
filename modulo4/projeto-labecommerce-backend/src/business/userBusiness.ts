import { insertUserDataBase, getUserDataBase } from "../data/userData";
import { User } from "../Models/User";

export const createNewUser = (id: string, name:string, email:string, password:string): User => {
    const user: User = {
        id,
        name,
        email,
        password
    };
    return user;
};

export const insertUser = (user: User): void => {
    insertUserDataBase(user);
    return;
};

export const getAllUsers = async () => {
    const users = await getUserDataBase();
    return users;
};