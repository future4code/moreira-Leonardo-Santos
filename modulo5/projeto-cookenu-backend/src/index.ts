import app from "./app";
import createUser from "./data/endpoints/createUser";

app.get('/user', createUser);