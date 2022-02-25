import { useState, useEffect } from "react";
import axios from 'axios';

const usePostRequirement = (url, body, headers) => {
    const [data, setData] = useState(undefined);

    useEffect(() => {
        axios.get(url, headers)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {console.log(err.response)});
    }, [url, body]);

    return data;
};
export default usePostRequirement;