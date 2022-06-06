import { Request, Response } from "express";
import { Product } from "../Models/Product";
import generateId from "../services/generateId";
import { createNewProduct, insertProduct, getAllProducts } from "../business/productBusiness";

export const placeProduct = (req: Request, res: Response): void => {
    let statusCode = 400;
    try {
        const { name, price, image_url } = req.body;
        const id: string = generateId();
        
        if (!name || !price ) {
            throw new Error('Informações faltantes: verifique o nome e preço do produto');
        }

        const newProduct: Product = createNewProduct(id, name, price, image_url);

        insertProduct(newProduct);
        statusCode = 201;
        res.status(statusCode).send('Product created');
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

export const getProducts = async (req: Request, res: Response) => {
    let statusCode = 400;
    try {
        const users = await getAllProducts();
        statusCode = 200;
        res.status(statusCode).send(users)
    } 
    catch (error) {
        res.status(500).send('Internal error, try again');
    }
};