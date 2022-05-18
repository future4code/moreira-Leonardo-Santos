import order from "../../src/Entities/order";
import orderItem from "../../src/Entities/orderItem";
import OrderItem from "../../src/Model/OrderItem";
import { orderMock } from "./orderMock";

export default class OrdersDataMock {
    public placeOrder = async (item: OrderItem): Promise<void> => {};

    public getOrders = async (): Promise<order | undefined> => {
        if (orderMock) {
            return [orderMock];
        }
        else {
            return undefined;
        }
    };

    public getOrderById = async (id: string): Promise<orderItem | undefined> => {
        if (orderMock.id === id) {
            return orderMock;
        }
        else {
            return undefined;
        }
    };
};