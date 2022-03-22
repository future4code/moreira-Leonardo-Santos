import { useState, useEffect } from "react";
import axios from 'axios';

const useGetRequirement = (url, headers) => {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(url, headers)
        .then((res) => {
            setIsLoading(false);
            setData(res.data);
        })
        .catch((err) => {
            setIsLoading(false);
            console.log(err.response);
        });
    }, [url]);

    return [data, isLoading];
};
export default useGetRequirement;