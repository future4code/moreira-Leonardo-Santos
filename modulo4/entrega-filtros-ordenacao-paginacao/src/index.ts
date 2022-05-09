import { app } from "./app";
import { getAllRecipes, getByName, getByType, getByTypeOrName, getFive, getUsersUltimate } from "./endpoints/endpoints";

// app.get("/recipes", getAllRecipes);
// app.get('/users', getByName);
// app.get('/users/:type', getByType);
// app.get('/types', getByTypeOrName);
// app.get('/users/fivebyfive/pg', getFive);
app.get('/users', getUsersUltimate);