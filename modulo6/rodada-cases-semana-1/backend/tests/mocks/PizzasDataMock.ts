import { BaseDatabase } from "../../src/Data/BaseDatabase";
import pizza from "../../src/Entities/pizza";
import Pizza from "../../src/Model/Pizza";
import { pizzaMock } from "./pizzaMock";

export default class PizzasDataMock extends BaseDatabase {

    public insertNewPizza = async (item: Pizza): Promise<void> => {};

    public getPizzas = async (): Promise<pizza[] | undefined> => {
        if (pizzaMock) {
            return [pizzaMock];
        }
        else{
            return undefined;
        }
    };
};