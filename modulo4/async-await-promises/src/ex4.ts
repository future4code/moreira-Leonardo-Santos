import axios from "axios";
import baseUrl from "./constants/baseUrl";
import { News } from "./types/types";
// Exercício 4
/* a)
 * -> Promise<void>, porque ela não retorna resposta. 
 */


/* b)
 */
export const createNews = async (news: News): Promise<void> => {
    return await axios.put(`${baseUrl}news`, news);
};