import express from 'express';
import OrdersBusiness from '../Business/OrdersBusiness';
import OrdersController from '../Controller/OrdersController';
import OrdersData from '../Data/OrdersData';
import { IdGenerator } from '../Services/IdGenerator';

export const ordersRouter = express.Router();

const ordersBusiness = new OrdersBusiness(
    new OrdersData(),
    new IdGenerator()
);

const ordersController = new OrdersController(ordersBusiness);

ordersRouter.post('/', ordersController.placeOrder);
ordersRouter.get('/', ordersController.getOrders);
ordersRouter.get('/:id', ordersController.getOrderById);