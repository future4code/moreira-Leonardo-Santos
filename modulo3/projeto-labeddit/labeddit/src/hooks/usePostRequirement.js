import { useState } from "react";
import axios from 'axios';

const usePostRequirement = (url, body, header) => {
    const [data, setData] = useState(undefined);

    const requirement = () => {
        axios.post(url, body, header)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {console.log(err.response)});
    }    

    return [data, requirement];
};
export default usePostRequirement;