export default class OrderItem {
    constructor(
        private id: string,
        private pizza: string,
        private quantity: number
    ){};

    public getId = (): string => {
        return this.id;
    };
    public getPizza = (): string => {
        return this.pizza;
    };
    public getQuantity = (): number => {
        return this.quantity;
    };
};