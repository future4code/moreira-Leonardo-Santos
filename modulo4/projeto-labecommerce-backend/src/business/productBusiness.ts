import { getProductDataBase, insertProductDataBase } from "../data/productData";
import { Product } from "../Models/Product";

export const createNewProduct = (id:string, name:string, price:number, image_url:string): Product => {
    const product: Product = {
        id,
        name,
        price,
        image_url
    };
    return product;
};

export const insertProduct = (product: Product): void => {
    insertProductDataBase(product);
    return;
};

export const getAllProducts = async () => {
    const data = await getProductDataBase();
    return data;
};