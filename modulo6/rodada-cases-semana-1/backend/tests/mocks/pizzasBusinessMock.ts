import PizzasBusiness from "../../src/Business/PizzasBusiness";
import PizzasDataMock from "./PizzasDataMock";
import { IdGeneratorMock } from "./IdGeneratorMock";

export const pizzasBusinessMock = new PizzasBusiness(
    new IdGeneratorMock(),
    new PizzasDataMock() as any
);