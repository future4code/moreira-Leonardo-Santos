import { useState } from "react";
import axios from 'axios';

const usePostPutRequirement = () => {
    const [data, setData] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);

    let test = {};
    
    const requirement = async (url, body, header) => {
        try {
            setIsLoading(true);
            test = await axios.post(url, body, header);
            setIsLoading(false);
        }
        catch (err) {
            setIsLoading(true);
            err.response.status === 401 ? alert('Email e/ou senha invalidos') : err.response.status === 409 ? alert(err.response.data) : console.log(err.response) ;
            setIsLoading(false);
        }
        finally {
            setData(test.data);
            return test;
        };
    };

    return [requirement, isLoading];
};
export default usePostPutRequirement;