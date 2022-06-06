import { app } from "./Controller/app";
import { ordersRouter } from "./router/ordersRouter";
import { pizzasRouter } from "./router/pizzasRouter";

app.use('/orders', ordersRouter);
app.use('/pizzas', pizzasRouter);