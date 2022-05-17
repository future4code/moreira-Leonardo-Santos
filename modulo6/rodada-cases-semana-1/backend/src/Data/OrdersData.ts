import order from "../Entities/order";
import orderItem from "../Entities/orderItem";
import OrderItem from "../Model/OrderItem";
import { BaseDatabase } from "./BaseDatabase";

export default class OrdersData extends BaseDatabase{
    private table: string = 'mama_lelo_orders';

    public placeOrder = async (item: OrderItem): Promise<void> => {
        try {
            await this.connection(this.table).insert({
                id: item.getId(),
                pizza: item.getPizza(),
                quantity: item.getQuantity() 
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

    public getOrders = async (): Promise<order> => {
        try {
            const orders: order = await this.connection(this.table);
            return orders;
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

    public getOrderById = async (id: string): Promise<orderItem> => {
        try {
            const [orderItem]: order = await this.connection(this.table).where({id});
            return orderItem;
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