import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/signup', (req, res) => {

});

app.get('/account', (req, res) => {
    
});

app.get('/account/balance', (req, res) => {
    
});

app.put('/account/balance/add', (req, res) => {

});

app.put('account/balance/intransfer', (req, res) => {
    
});

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address: AddressInfo = server.address() as AddressInfo;
        console.log(`My server is running on http://localhost:${address.port}!`);
    }
    else {
        console.log('Server can`t be found, please try again');
    }
});