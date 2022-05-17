import pizza from "../Entities/pizza";
import Pizza from "../Model/Pizza";
import { BaseDatabase } from "./BaseDatabase";

export default class PizzasData extends BaseDatabase{
    private table: string = 'mama_lelo_pizzas'
    
    public insertNewPizza = async (item: Pizza): Promise<void> => {
        try {
            await this.connection(this.table).insert({
                id: item.getId(),
                pizza: item.getName(),
                quantity: item.getPrice() 
            });    
        } 
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            else {
                throw new Error('Error to reach the data-base');
            }
        };
    };

    public getPizzas = async (): Promise<pizza[]> => {
        try {
            const pizzas: pizza[] = await this.connection(this.table);
            return pizzas;
        } 
        catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            else {
                throw new Error("Error to reach the data-base");
            }
        }
    };
};