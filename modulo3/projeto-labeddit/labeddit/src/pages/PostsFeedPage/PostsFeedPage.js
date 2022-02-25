import React from "react";
import useProtectedPage from '../../hooks/useProtectedPage.js';

const PostsFeedPage = () => {
    useProtectedPage();

    return(
        <>
            <h1>
                Agora faltam os Posts!... volte logo eles estão sendo produzidos.
            </h1>
        </>
    )
};
export default PostsFeedPage;