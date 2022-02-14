import { useState,  useEffect } from "react";
import axios from "axios";

const useApiRequirement = (url) => {
    const [data, setData] = useState(undefined);

    const getData = () => {
        axios.get(url)
        .then((res) => {
            setData(res.data);
        })
        .catch((err) => {
            console.log(err.response)
        });
    }; 

    useEffect(() => {
        getData();
    }, [url]);

    return data;
};
export default useApiRequirement;