import express, { Express } from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';

const app: Express = express();

app.use(express.json());
app.use(cors());
export default app;

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`The server is running in http:/localhost:${address.port}`);
    }
    else{
        console.log('Something went wrong, please restart the server');
    }
});