import app from "./app";
import connection from "./connection";
import {Request, Response} from "express";
import {User, UserById} from "./types/types";

// Exercício 1
app.post('/user', async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;
    try{
        const name : string = req.body.name;
        const nickname : string = req.body.nickname;
        const email : string = req.body.email;
        const newUser: User = {
            name,
            nickname,
            email
        };
        
        if (name === undefined || name === null) {
            throw new Error('A pessoa a ser cadastrada precisa ter um nome');
        }
        if (nickname === undefined || nickname === null) {
            throw new Error('A pessoa a ser cadastrada precisa ter um apelido');
        }
        if (email === undefined || email === null) {
            throw new Error('A pessoa a ser cadastrada precisa ter um email');
        }

        await connection('users').insert(newUser);

        res.status(200).send('Pessoa cadastrada com sucesso');
    } 
    catch(err: any){
        switch (err.message) {
            case 'A pessoa a ser cadastrada precisa ter um nome':
                res.status(statusCode).send({message: err.message})
                break;
        
            default:
                res.status(500).send('Ops! Algo deu errado, por gentileza tente novamente')
                break;
        }
    };
});

// Exercício 4
app.post('/task', async (req: Request, res: Response): Promise<void> => {
    const statusCode = 400;
    try{
        const {title, description, limitDate, creatorUserId} = req.body;

        if (title === undefined || description === undefined || limitDate === undefined || creatorUserId === undefined || title === "" || description === "" || limitDate === "" || creatorUserId === "") {
            throw new Error('Todos os campos devem ser preenchidos');
        }

        const dateArr: string[] = limitDate.split('/');
        const rightDateArr: string[] = [dateArr[2], dateArr[1], dateArr[0]];
        const rightDate: string = rightDateArr.join('/');

        await connection('milestones').insert({title: title, description: description, user_id: creatorUserId, limitDate: rightDate});

        res.status(200).send('Tarefa adicionada');
    }
    catch(err: any){
        switch (err.message) {
            case 'Todos os campos devem ser preenchidos mesmo se não forem alterados':
                res.status(statusCode).send(err.message);
                break;
        
            default:
                res.status(500).send('Um erro inesperado aconteceu');
                break;
        }
    }
});

// Exercício 2
app.get('/user/:id', async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;
    try{
        const id: number = Number(req.params.id);
        if (id === null || id === undefined || id === NaN) {
               throw new Error('O id do usuário precisa ser informado e precisa ser um número inteiro maior que 0');
        }

        const result: UserById[] = await connection('users').select('id', 'nickname'); 

        result.forEach(user => {
            if (user.id === id) {
                res.status(200).send({data: user});
            }
            else {
                statusCode = 404;
                throw new Error('Usuário não encontrado');
            }
        });
    } 
    catch(err: any){
        switch (err.message) {
            case 'O id do usuário precisa ser informado':
                res.status(statusCode).send(err.message);
                break;
            case 'Usuário não encontrado':
                res.status(statusCode).send(err.message);
                break;
            default:
                res.status(500).send(err.message);
                break;
        }     
    };
});

// Exercício 5 
app.get('/task/:id', async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;
    try {
        const id: number = Number(req.params.id);
        
        if (id === NaN || id === undefined) {
            throw new Error('O id está inválido ele precisa ser um número inteiro maior que 0');
        }

        const result = await connection('milestones').join('users', 'milestones.user_id', 'users.id').select('milestones.id', 'title', 'description', 'limitDate', 'status', 'user_id', 'users.nickname');

        result.forEach((task) => {
            if (task.id === id) {
                const txt = `${task.limitDate.getDate()}/${task.limitDate.getMonth()}/${task.limitDate.getFullYear()}`;

                task.limitDate = txt;
                res.status(200).send(task);
            }
        });
    } 
    catch(err: any){
        switch (err.message) {
            case 'O id está inválido ele precisa ser um número inteiro maior que 0':
                res.status(statusCode).send(err.message);
                break;
        
            default:
                res.status(500).send('Erro inesperado');
                break;
        }
    }
});

// Exercício 3
app.put('/user/edit/:id', async (req: Request, res: Response): Promise<void> => {
    let statusCode = 400;
    try {
            const name = req.body.nickname;
            const nickname = req.body.nickname;
            const {id} = req.params;

            if (name === undefined || nickname === undefined || name === "" || nickname === "") {
                throw new Error('Todos os campos devem ser preenchidos mesmo se a informação não for mudar');
            }

            await connection('users').where('id', Number(id)).update({name: name, nickname: nickname});
            res.status(200).send('Dados alterados')
    } 
    catch(err: any){
        switch (err.message) {
            case 'Todos os campos devem ser preenchidos mesmo se a informação não for mudar':
                res.status(statusCode).send(err.message);
                break;
        
            default:
                res.status(500).send('Um erro inesperado aconteceu');
                break;
        }
    }
});