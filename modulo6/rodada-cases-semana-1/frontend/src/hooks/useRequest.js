import axios from "axios";
import { useState } from "react";

const useRequest = () => {
  const [isLoading, setIsLoading] = useState(false);

  const makeRequest = async (method, url, body, headers) => {
    setIsLoading(true);
    try {
      const { data } = await axios[`${method}`](url, body, headers);
      setIsLoading(false);
      console.log(data);
      return data;
    } catch (err) {
      setIsLoading(false);
      return err.response;
    }
  };

  return [makeRequest, isLoading];
};
export default useRequest;