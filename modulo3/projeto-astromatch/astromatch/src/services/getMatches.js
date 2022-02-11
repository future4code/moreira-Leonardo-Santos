import axios from "axios";
import baseUrl from "../constants/baseUrl.js";
import headers from "../constants/headers.js";

const getMatches = async () => {
    try {
        const res = await axios.get(`${baseUrl}matches`, headers);

        return res.data.matches;
    }
    catch(err) {
        console.log(err.response);
    };
};
export default getMatches;