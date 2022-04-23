import axios from "axios";
import baseUrl from "./constants/baseUrl";
import { User } from "./types/types";
// Exercício 3 
/* a)
 * -> Não.
 */
/* b) 
 * -> Para sabermos quais propriedades existem naquela promise para podermos tipar o resultado.
 */
/* c)
 */
export const getSubsTyped = async (): Promise<User[]> => {
    const {data} = await axios.get(`${baseUrl}subscribers`);
    return data;
};