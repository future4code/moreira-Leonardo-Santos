import OrdersBusiness from "../../src/Business/OrdersBusiness";
import { IdGeneratorMock } from "./IdGeneratorMock";
import OrdersDataMock from "./OrdersDataMock";

export const ordersBusinessMock = new OrdersBusiness(
    new OrdersDataMock() as any,
    new IdGeneratorMock()
);