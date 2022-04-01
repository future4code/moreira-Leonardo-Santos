import express, { Request, Response} from 'express';
import cors from 'cors';
import { users } from './data/data';
import { User } from './Types/Types';

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1
/* a)
 * - usaria o método GET
 */
/* b)
 * - seria algo como: "/users"
 */
app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users);
});

// Exercício 2
/* a)
 * - Creio que a melhor forma de passar o valor de type atravez da requisição
 *   seria passando através de query params, ja que se trata de uma consulta a API 
 */
/* b)
 * - Isolando eles em uma nova array contendo apenas os itens quais o type seja correspondente
 *   utilizando o metodo Array.prototype.filter()
 *   para um tratamento de erros seria possível criar um ENUM com os types pré definidos 
 *   e comparalos com o input
 */
app.get('/users/type', (req: Request, res: Response) => {
    const type: string = req.query.type as string;
    const filteredList: User[] = users.filter((user) => user.type === type);

    res.status(200).send(filteredList);
});

// Exercício 3 
/* a)
 * - Aqui usaria query params, pois mais uma vez é apenas uma consulta à API
 */
app.get('/users/name', (req: Request, res: Response) => {
    let errorStatus = 400
    try{
        const name: string = req.query.name as string;
    
        const filteredList: User[] = users.filter((user) => {
            if (user.name === name) {
                return user
            }
            else{
                errorStatus = 404;
                throw new Error('User not found, try again');
            }
        });

        res.status(200).send(filteredList);
    }
    catch (err: any) {
        res.status(errorStatus).send(err.message);
    }    
});

// Exercício 4
app.post('/users/new', (req: Request, res: Response) => {
    const {name, email, type, age} = req.body;   
    const newUser: User = {
        id: Date.now(),
        name,
        email,
        type,
        age
    };

    users.push(newUser);
    
    res.status(200).send({message: 'User added', list: users});

});
/* a)
 * - Após mudar para PUT o comportamento esperado de adicionar um novo usuário falhou 
 */
/* b)
 * - Não considero o método PUT como mais adequado para esse caso, pois ele serve para modificar um item, ou seja, usuário
 *  já o método POST serve para adicionar itens ao banco de dados.
 */

app.listen(3003, () => {
    console.log('My server is runnin on port 3003');
});