import axios from 'axios';
import { AddressRaw } from '../types/types';

const getRequest = async (url: string): Promise<AddressRaw> => {
    const response = await axios.get(url);

    return response.data;
};
export default getRequest;