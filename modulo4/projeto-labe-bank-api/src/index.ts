import express from 'express';
import cors from 'cors';
import { AddressInfo } from 'net';
import { User } from './Types/Types';
import { users } from './data/data';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/signup', (req, res) => {
    let currentStatus = 400;
    const {name, cpf, birth} = req.body;

    try {
        const birthNums: number[] = birth.split("/");
        const currentYaer: number = new Date().getFullYear();
        const age: number = currentYaer - birthNums[2]

        if (age < 18) {
            currentStatus = 401;
            throw new Error("User doesn't have necessary age");
        }

        const newUser: User = {
            id: Date.now().toString(),
            name,
            cpf,
            birth,
            balance: 0,
            extract: []
        };

        users.push(newUser);

        res.status(200).send('User created successfully');
    }
    catch (err: any) {
        res.status(currentStatus).send(err.message)
    };    
});

app.get('/users', (req, res) => {
    res.status(200).send(users);
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