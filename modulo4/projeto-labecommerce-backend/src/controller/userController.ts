import { Request, Response } from "express";
import { createNewUser, insertUser, getAllUsers } from "../business/userBusiness";
import { User } from "../Models/User";
import generateId from "../services/generateId";

export const signUp = (req: Request, res: Response): void => {
    let statusCode = 400;
    try {
        const { name, email, password } = req.body;
        const id: string = generateId();
        
        if (!name || !email || !password) {
            throw new Error('Informações faltantes: verifique o nome, email e senha');
        }

        const newUser: User = createNewUser(id, name, email, password);

        insertUser(newUser);
        statusCode = 201;
        res.status(statusCode).send('User created');
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

export const getUsers = async (req: Request, res: Response) => {
    let statusCode = 400;
    try {
        const users = await getAllUsers();
        statusCode = 200;
        res.status(statusCode).send(users)
    } 
    catch (error) {
        res.status(500).send('Internal error, try again');
    }
};