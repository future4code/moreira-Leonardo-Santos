import axios from 'axios';
import baseUrl from './constants/baseUrl';
import { User } from './types/types';
// Exercício 1
/* a)
 * -> método GET
 */ 
/* b)
 * -> indicando após os parâmetros ...): Promise<any[]> => {...
 */ 
/* c)
 */
export async function getSubs (): Promise<User[]> {
    const response = await axios.get(`${baseUrl}subscribers`);
    return response.data;
};