import PizzasData from "../Data/PizzasData";
import pizza from "../Entities/pizza";
import Pizza from "../Model/Pizza";
import { IdGenerator } from "../Services/IdGenerator";
import insertNewPizzaInputDTO from "../types/DTO/insertNewPizzaInputDTO";

export default class PizzasBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private pizzasData: PizzasData
    ){};

    public insertNewPizza = async (input: insertNewPizzaInputDTO): Promise<void> => {
        const {name, price} = input;
        const id = this.idGenerator.generateId();

        if (!name || !price) {
            throw new Error('All fields must be filled');
        }

        if (price <= 0) {
            throw new Error('To insert a pizza it must have a price');
        }

        const pizza = new Pizza(id, name, price);

        await this.pizzasData.insertNewPizza(pizza);
    };

    public getPizzas = async (): Promise<pizza[]> => {
        const pizzas: pizza[] = await this.pizzasData.getPizzas();

        if (!pizzas || pizzas.length === 0) {
            throw new Error("Couldn't find pizzas");
        }

        return pizzas;
    };
};