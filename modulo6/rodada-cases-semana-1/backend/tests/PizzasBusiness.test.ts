import { pizzaMock } from "./mocks/pizzaMock";
import { pizzasBusinessMock } from "./mocks/pizzasBusinessMock";
import { pizzaNegativePriceMock, pizzaNoNameMock, pizzaNoPriceMock } from "./mocks/pizzasInputMock";

describe('Test on pizzas insert feature', () => {
    test('Testing error if pizza input has no name', async () => {
        expect.assertions;
        try {
          await pizzasBusinessMock.insertNewPizza(pizzaNoNameMock);  
        } 
        catch (error: any) {
            expect(error.message).toEqual('All fields must be filled');
        };
    });

    test('Testing error if pizza input has no price', async () => {
        expect.assertions;
        try {
          await pizzasBusinessMock.insertNewPizza(pizzaNoPriceMock);  
        } 
        catch (error: any) {
            expect(error.message).toEqual('All fields must be filled');
        };
    });

    test('Testing error if pizza input has negative price', async () => {
        expect.assertions;
        try {
          await pizzasBusinessMock.insertNewPizza(pizzaNegativePriceMock);  
        } 
        catch (error: any) {
            expect(error.message).toEqual('To insert a pizza it must have a price');
        };
    });

    test('Testing if pizza was created', async () => {
        expect.assertions;
        try {
            await pizzasBusinessMock.insertNewPizza(pizzaMock);    
            expect(pizzasBusinessMock.insertNewPizza).toBeCalled();
        } 
        catch (error) {
            // dont know what put here yet
        }
    });
});

describe('Test on fetch pizzas feature', () => {
    test('Testing error if pizzas couldnt be fetched', async () => {
        expect.assertions;
        try {
            const pizzas = await pizzasBusinessMock.getPizzas();
        } 
        catch (error: any) {
            expect(error.message).toEqual("Couldn't find pizzas");
        }
    });

    test('Testing if pizzas were fetched', async () => {
        expect.assertions;
        try {
            const pizzas = await pizzasBusinessMock.getPizzas();
            expect(pizzas).toBe([pizzaMock]);    
        } 
        catch (error: any) {
            // :/
        }
    });
});