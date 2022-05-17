import express from 'express';
import PizzasBusiness from '../Business/PizzasBusiness';
import PizzasController from '../Controller/PizzasController';
import PizzasData from '../Data/PizzasData';
import { IdGenerator } from '../Services/IdGenerator';

export const pizzasRouter = express.Router();

const pizzasBusiness: PizzasBusiness = new PizzasBusiness(
    new IdGenerator(),
    new PizzasData()
);

const pizzasController: PizzasController = new PizzasController(pizzasBusiness);

pizzasRouter.post('/', pizzasController.insertNewPizza);
pizzasRouter.get('/', pizzasController.getPizzas);