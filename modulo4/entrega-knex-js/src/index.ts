import app from './app';
import connection from './connection';

// Exercício 1
/* a)
 * A resposta que chega do metodo raw é um Promise contendo
 * informações da tabela de dados junto com o resultado esperado em si no caso este ocupa a posição result[0]
 */

/* b) 
 */
app.get('/actor', async (req, res) => {
    try{
        // usando knex.raw():
        const {name} = req.query;

        // const result = await connection.raw(
        //     `SELECT * FROM actors WHERE name LIKE "%${name}%";` 
        // );
        
        // usando QueryBuilder
        const result = await connection('actors').whereLike('name', `%${name}%`).select();
        res.status(200).send(result);     
    }
    catch(err){
        console.log(err);
    };
});

/* c) 
 */