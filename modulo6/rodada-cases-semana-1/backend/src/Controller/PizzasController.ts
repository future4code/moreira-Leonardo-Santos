import { Request, Response } from "express";
import PizzasBusiness from "../Business/PizzasBusiness";
import pizza from "../Entities/pizza";
import insertNewPizzaInputDTO from "../types/DTO/insertNewPizzaInputDTO";

export default class PizzasController {
    constructor(
        private pizzasBusiness: PizzasBusiness
    ){};

    public insertNewPizza = async (req: Request, res: Response): Promise<void> => {
        try {
            const {name, price} = req.body;
            const input: insertNewPizzaInputDTO = {
                name,
                price
            };

            await this.pizzasBusiness.insertNewPizza(input);
            res.status(201).send('Pizza added successfully');
        } 
        catch (error: any) {
            switch (error.message) {
                case 'All fields must be filled':
                    res.status(400).send(error.message);
                    break;
                case 'To insert a pizza it must have a price':
                    res.status(400).send(error.message);
                    break;
                case 'Error to reach the data-base':
                    res.status(500).send(error.message);
                    break;
            
                default:
                    res.status(500).send('Internal error, try again')
                    break;
            }
        }
    };

    public getPizzas = async (req: Request, res: Response): Promise<void> => {
        try {
            const pizzas: pizza[] = await this.pizzasBusiness.getPizzas();

            res.status(200).send({data: pizzas})            
        } 
        catch (error: any) {
            switch (error.message) {
                case "Couldn't find pizzas":
                    res.status(404).send(error.message);
                    break;
                case 'Error to reach the data-base':
                    res.status(500).send(error.message);
                    break;
            
                default:
                    res.status(500).send('Internal error, try again')
                    break;
            }
        }
    };
};