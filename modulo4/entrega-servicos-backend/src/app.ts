import express, {Express} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AddressInfo } from 'net';

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

const server = app.listen(Number(process.env.DB_PORT) || 3003, () => {
    if (server) {
        const address: AddressInfo = server.address() as AddressInfo;
        console.log(`Server runing in http://localhost:${address.port}`);
    }
    else{
        console.log('Error to connect with server, please try again');
    }
});
export default app;