// Exercício 1
import express from 'express';
import cors from 'cors';
import { todoList } from './data/data';
import { Todo } from './Types/Types';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    const entry: string = req.body.entry;

    if (entry.toLowerCase() === "ping") {
        res.status(200).send('pong');
    }
    else {
        res.status(404).send('To play insert "ping"');
    }    
});

// Exercício 4
app.get('/todos', (req, res) => {
    const status = req.body.status;
    
    const filteredList: Todo[] = todoList.filter((item) => {
        if (item.completed === Boolean(status)) {
            return item;
        }
    });
    
    res.status(200).send(filteredList);
    
});

// Exercício 8
app.get('/todos/:user', (req, res) => {
    const userId: number = Number(req.params.user);

    const userList: Todo[] = todoList.filter((item) => {
        if (userId === item.userId) {
            return item;
        }
    });
    
    res.status(200).send(userList);
}); 

// Exercício 5
app.post('/todos/new', (req, res) => {
    const userId: number = Number(req.headers.authorization);
    const newItemTitle: string = req.body.title;
    const newItemStatus: boolean = req.body.status;
    const newItem: Todo = {
        userId: userId,
        id: Date.now(),
        title: newItemTitle,
        completed: newItemStatus
    };
    
    todoList.push(newItem);

    res.status(200).send(todoList);
});

// Exercício 6
app.put('/todos/:todoid/status', (req, res) => {
    const todoId: number = Number(req.params.todoid);
    const newStatus: boolean = req.body.status;

    todoList.map((item) => {
        if (todoId === item.id) {
            item.completed = newStatus;
            return item;
        }
    });

    res.status(200).send(todoList);
});

// Exercício 7
app.delete('/todos/:todoid/del', (req, res) => {
    const todoId: number = Number(req.params.todoid);

    todoList.filter((item) => {
        if (todoId === item.id) {
            const index: number = todoList.indexOf(item);

            todoList.splice(index, 1);
        }
    }); 

    res.status(200).send(todoList);
}); 



app.listen(3003, () => {
    console.log("Meu servidor local está rodando na porta 3003");
});