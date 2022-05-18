import { orderInputMock, orderInputNegativeQtyMock, orderInputNoPizzaMock, orderInputNoQtyMock } from "./mocks/orderInputMock";
import { orderMock } from "./mocks/orderMock";
import { ordersBusinessMock } from "./mocks/ordersBusinessMock";

describe('Test on place order feature', () => {
    test('Testing error if order input has no pizza', async () => {
        expect.assertions;
        try {
            await ordersBusinessMock.placeOrder(orderInputNoPizzaMock);    
        } 
        catch (error: any) {
            expect(error.message).toEqual('All fields must be filled');
        }
    });
    test('Testing error if order input has no quantity', async () => {
        expect.assertions;
        try {
            await ordersBusinessMock.placeOrder(orderInputNoQtyMock);    
        } 
        catch (error: any) {
            expect(error.message).toEqual('All fields must be filled');
        }
    });
    test('Testing error if order input has negative quantity', async () => {
        expect.assertions;
        try {
            await ordersBusinessMock.placeOrder(orderInputNegativeQtyMock);    
        } 
        catch (error: any) {
            expect(error.message).toEqual('To place an order you must have at least one pizza');
        }
    });
    test('Testing if order was created', async () => {
        expect.assertions;
        try {
            await ordersBusinessMock.placeOrder(orderInputMock);    
            expect(ordersBusinessMock.placeOrder).toBeCalled();
        } 
        catch (error: any) {
            // still dont know what put in here
        }
    });
});

describe('Test on get orders feature', () => {
    test('Testing error if the orders doesnt exists', async () => {
        expect.assertions;
        try {
            const orders = await ordersBusinessMock.getOrders();
        } 
        catch (error: any) {
            expect(error.message).toEqual("Couldn't find orders");    
        }
    });

    test('Testing if the orders exists', async () => {
        expect.assertions;
        try {
            const orders = await ordersBusinessMock.getOrders();
            expect(orders).toBe([orderMock]);
        } 
        catch (error: any) {
            // dont know
        }
    });
});

describe('Test on get order by id feature', () => {
    test('Testing error if the id doesnt exists', async () => {
        expect.assertions;
        try {
            const order = await ordersBusinessMock.getOrderById('');
        } 
        catch (error: any) {
            expect(error.message).toEqual("Be sure that a id was passed by path-params");    
        }
    });    

    test('Testing if the order exists', async () => {
        expect.assertions;
        try {
            const order = await ordersBusinessMock.getOrderById('id_mock');
            expect(order).toBe(orderMock);
        } 
        catch (error: any) {
            expect(error.message).toEqual("Couldn't find order, check the order id");    
        }
    });
});