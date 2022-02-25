import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostPage = () => {
    useProtectedPage();

    return(
        <>
            <h1>Post</h1>
        </>
    )
};
export default PostPage;