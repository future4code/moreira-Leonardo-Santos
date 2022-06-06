import { Request, Response } from "express";
import OrdersBusiness from "../Business/OrdersBusiness";
import order from "../Entities/order";
import orderItem from "../Entities/orderItem";
import placeOrderInputDTO from "../types/DTO/placeOrderInputDTO";

export default class OrdersController {
    constructor(
        private ordersBusiness: OrdersBusiness,
    ){}

    public placeOrder = async (req: Request, res: Response): Promise<void> => {
        try {
            const {pizza, quantity} = req.body;
            const input: placeOrderInputDTO = {
                pizza,
                quantity
            };

            await this.ordersBusiness.placeOrder(input);
            res.status(201).send('Order created successfully');
        } 
        catch (error: any) {
            switch (error.message) {
                case 'All fields must be filled':
                    res.status(400).send(error.message);
                    break;
                case 'To place an order you must have at least one pizza':
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

    public getOrders = async (req: Request, res: Response): Promise<void> => {
        try {
            const orders: order = await this.ordersBusiness.getOrders();

            res.status(200).send({data: orders})            
        } 
        catch (error: any) {
            switch (error.message) {
                case "Couldn't find orders":
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

    public getOrderById = async (req: Request, res: Response): Promise<void> => {
        try {
            const {id} = req.params;
            const orderItem: orderItem = await this.ordersBusiness.getOrderById(id);
            res.status(200).send({data: orderItem});    
        } 
        catch (error: any) {
            switch (error.message) {
                case "Be sure that a id was passed by path-params":
                    res.status(400).send(error.message);
                    break;
                case "Couldn't find order, check the order id":
                    res.status(404).send(error.message);
                    break;
                case "Error to reach the data-base":
                    res.status(500).send(error.message);
                    break;
            
                default:
                    res.status(500).send('Internal error, try again')
                    break;
            }
        }
    };
};