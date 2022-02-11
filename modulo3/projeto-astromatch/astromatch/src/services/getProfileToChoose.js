import axios from 'axios'
import baseUrl from '../constants/baseUrl.js'

const getProfileToChoose = async () => {
    try {
        const response = await axios.get(`${baseUrl}person`);

        const person = response.data.profile;
        return person;  
    }
    catch(err) {
        return err.response;
    };
};
export default getProfileToChoose;