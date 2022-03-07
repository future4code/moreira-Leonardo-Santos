import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage.js';
import { baseUrl } from "../../constants/baseUrl.js";

import useGetRequirement from "../../hooks/useGetRequirement.js";

const PostsFeedPage = () => {
    useProtectedPage();
    const token = localStorage.getItem('token');

    const headers = {
        headers:{
            Authorization: `${token}`
        }
    };

    const [data, isLoading] = useGetRequirement(`${baseUrl}posts`, headers);
    console.log(data);

    

    return(
        <>
            {}
        </>
    )
};
export default PostsFeedPage;