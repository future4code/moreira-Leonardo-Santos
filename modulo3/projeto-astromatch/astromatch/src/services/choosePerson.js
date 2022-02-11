import axios from "axios";
import baseUrl from "../constants/baseUrl.js";
import headers from '../constants/headers.js'

const choosePerson = (id, match) => {

    const body = {
        "id": id,
        "choice": match
    };

    axios.post(`${baseUrl}choose-person`, body, headers)
    .then((response) => {
        console.log(response.data);
    })
    .catch((err) => {console.log(err.response)});
};

export default choosePerson;