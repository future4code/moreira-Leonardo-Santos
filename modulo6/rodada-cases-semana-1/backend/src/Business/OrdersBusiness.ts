import OrdersData from "../Data/OrdersData";
import order from "../Entities/order";
import orderItem from "../Entities/orderItem";
import OrderItem from "../Model/OrderItem";
import { IdGenerator } from "../Services/IdGenerator";
import placeOrderInputDTO from "../types/DTO/placeOrderInputDTO";

export default class OrdersBusiness {
    constructor(
        private ordersData: OrdersData,
        private idGenerator: IdGenerator
    ){};

    public placeOrder = async (input: placeOrderInputDTO): Promise<void> => {
        const {pizza, quantity} = input;
        const id = this.idGenerator.generateId();

        if (!pizza || !quantity) {
            throw new Error('All fields must be filled');
        }

        if (quantity <= 0) {
            throw new Error('To place an order you must have at least one pizza');
        }

        const orderItem = new OrderItem(id, pizza, quantity);

        await this.ordersData.placeOrder(orderItem);
    };

    public getOrders = async (): Promise<order> => {
        const orders: order = await this.ordersData.getOrders();

        if (!orders || orders.length === 0) {
            throw new Error("Couldn't find orders");
        }

        return orders;
    };

    public getOrderById = async (id: string): Promise<orderItem> => {
        if (!id || id === "") {
            throw new Error("Be sure that a id was passed by path-params");
        }

        const orderItem: orderItem = await this.ordersData.getOrderById(id);

        if (!orderItem) {
            throw new Error("Couldn't find order, check the order id");
        }

        return orderItem;
    };
};