import axios from "axios";
import baseUrl from "./constants/baseUrl";
import { User } from "./types/types";
// Exercício 6
/* a)
 * -> Ele realiza uma sequência de requisições armazenadas em um array e retorna uma Promise
 */
/* b)
 * -> Usar esse método faz com que as requisições sejam executada de forma mais rápida e dinâmica ao usar a sintaxe async/await
 */


/* c)
 */
export const sendNotficationsPromiseAll = async (users: User[], msg: string): Promise<void> => {
    try {
        const ids: string[] = users.map((user => user.id));

        const requests = ids.map(id => axios.post(`${baseUrl}notifications`, {
                subscriberId: id,
                message: msg
            }
        ));
        
        await Promise.all(requests);

        console.log(`Mensagem "${msg}" enviada aos assinantes`);
    } 
    catch {
        console.log('Error');
    }
};