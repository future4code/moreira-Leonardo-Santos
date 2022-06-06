import app from "./controller/app";
import { signUp, getUsers } from "./controller/userController";
import { placeProduct, getProducts } from "./controller/productController";
import { placeOrder, getUserOrders } from "./controller/purchasesController";

// Exercício 1
app.post('/users', signUp);

// Exercício 2
app.get('/users', getUsers);

// Exercício 3
app.post('/products', placeProduct);

// Exercício 4
app.get('/products', getProducts);

// Exercício 5
app.post('/purchases', placeOrder);

// Exercício 6
app.get('/users/:user_id/purchases', getUserOrders);