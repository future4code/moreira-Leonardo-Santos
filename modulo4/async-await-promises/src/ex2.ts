import axios from 'axios';
import baseUrl from './constants/baseUrl';
import { User } from './types/types';
// Exercício 2
/* a)
 * -> na arrow function a palavra reservada "async" vem antes dos parametros, na sintaxe de função nomeada vem antes da palavra reservada "function"
 */
/* b)
 */
export const getSubsArrow = async (): Promise<User[]> => {
    const response = await axios.get(`${baseUrl}subscribers`);
    return response.data;
};