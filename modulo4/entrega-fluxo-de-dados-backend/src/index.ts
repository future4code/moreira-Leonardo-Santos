import express from 'express';
import cors from 'cors';
import { Product } from './Types/Types';
import { products } from './data/data';

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
app.get('/test', (req, res) => {
    res.status(200).send('Test passed');
});

// Exercício 4
app.get('/products', (req, res) => {
    res.status(200).send(products);
});

// Exercício 3
app.post('/products/new', (req, res) => {
    const newProdName: string = req.body.name;
    const newProdPrice: number = req.body.price;
    const newProd: Product = {
        id: Date.now().toString(),
        name: newProdName,
        price: newProdPrice
    }; 
    try {
        
        // Exercício 7
        if (newProdPrice <= 0) {
            throw new Error('The product price must be bigger than 0.00');
        }
        else if (!newProdName || !newProdPrice) {
            throw new Error('One of the body properties name or price is missing');
        }
        else if (!newProdName && !newProdPrice) {
            throw new Error('Body properties name and price are missing');
        }

        products.push(newProd);

        res.status(200).send(products);
    } catch (err: any) {
        switch (err.message) {
            case 'Body properties name and price are missing':
                res.status(400).send(err.message);
                break;
            case 'One of the body properties name or price is missing':
                res.status(401).send(err.message);
                break;
            case 'The product price must be bigger than 0.00':
                res.status(402).send(err.message);
                break;
        
            default:
                res.status(500).send('Ops something went wrong, try again')
                break;
        }
    }; 
});

//Exercício 5
app.put('/products/price/:prodid', (req, res) => {
    try {
        const prodId: string = req.params.prodid;
        const newPrice: number = req.body.price;

        products.map((product) => {
            if (prodId === product.id) {
                product.price = newPrice;
            }
            else {
                throw new Error('The product can`t be found');
            }
        });

        // Exercício 8
        if (newPrice === undefined) {
            throw new Error('The price must be a number bigger than 0');
        }

        if (newPrice <= 0) {
            throw new Error('The value of the product must be higher than 0')
        }

        res.status(200).send(products);
    }    
    catch (err: any) {
        switch (err.message) {
            case 'The price must be a number bigger than 0':
                res.status(400).send(err.message);
                break;
            case 'The value of the product must be higher than 0':
                res.status(401).send(err.message);
                break;
            case 'The product can`t be found':
                res.status(404).send(err.message);
                break;
        
            default:
                res.status(500).send('Something wrong happened, please try again');
                break;
        }
    };
});

//Exercício 6
app.delete('/products/del/:prodid', (req, res) => {
    try {
        const prodId: string = req.params.prodid;
        
        products.filter((product) => {
            if (prodId === product.id) {
               const index: number = products.indexOf(product);

               products.splice(index, 1);
            }
            // Exercício 9
            else {
                throw new Error('Product can`t be found');
            }
        });

        res.status(200).send(products);
    }
    catch (err: any) {
        switch (err.message) {
            case 'Product can`t be found':
                res.status(404).send(err.message);
                break;
        
            default:
                res.status(500).send('Something wrong happened, please try again');
                break;
        }
    };   
});

app.listen(3003, () => {
    console.log('my server is running on port 3003');
});