import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { AddressInfo } from 'net';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.DB_PORT || 3003, () => {
    if (server) {
        const address: AddressInfo = server.address() as AddressInfo;
        console.log(`The server is running in http://localhost:${address.port}`); 
    }
    else {
        console.log('Something went wrong, prease try restart the server');
    }
});
export default app;