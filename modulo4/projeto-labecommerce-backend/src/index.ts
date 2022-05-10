import app from "./controller/app";
import { signUp, getUsers } from "./controller/userController";

// Exercício 1
app.post('/users', signUp);

// Exercício 2
app.get('/users', getUsers);

// Exercício 3