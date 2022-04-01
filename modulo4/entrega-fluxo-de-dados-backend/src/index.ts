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

    products.push(newProd);

    res.status(200).send(products);
});

//Exercício 5
app.put('/products/price/:prodid', (req, res) => {
    const prodId: string = req.params.prodid;
    const newPrice: number = req.body.price;
    
    products.map((product) => {
        if (prodId === product.id) {
            product.price = newPrice;
        }
    });

    res.status(200).send(products);
});

//Exercício 6
app.delete('/products/del/:prodid', (req, res) => {
    const prodId: string = req.params.prodid;
    
    products.filter((product) => {
        if (prodId === product.id) {
           const index: number = products.indexOf(product);

           products.splice(index, 1);
        }
    });

    res.status(200).send(products);
});

app.listen(3003, () => {
    console.log('my server is running on port 3003');
});