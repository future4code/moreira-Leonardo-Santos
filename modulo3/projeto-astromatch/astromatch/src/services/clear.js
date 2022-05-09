import axios from "axios";
import baseUrl from "../constants/baseUrl.js";
import headers from "../constants/headers.js";

const clear = () => {
    axios.put(`${baseUrl}clear`, headers)
    .then((res) => {console.log()})
    .catch((err) => {console.log()}); 
}; 

export default clear;