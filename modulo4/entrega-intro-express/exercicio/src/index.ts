// Exercicio 1
import express from 'express';
import cors from 'cors';
import { users, posts } from './data/data';
import { Post } from './types/types';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send('Deu certo! uhuuulll');
});

app.get('/users', (req, res) => {
    res.status(200).send(users);
});

app.get('/posts', (req, res) => {
    res.status(200).send(posts);
});

app.get('/posts/:userid', (req, res) => {
    const post: Post[] = posts.filter((post) => {
        if (Number(req.params.userid) === post.userId) {
            return post;
        }
    }).flat(1);
    res.status(200).send(post);
});


app.listen(3003, () => {
    console.log("Meu primeiro servidor local está rodando na porta 3003 ;)");
});