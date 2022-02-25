export const goToLoginPage = (navigate) => {
    navigate('/');
};

export const goToRegisterPage = (navigate) => {
    navigate('/cadastro');
};

export const goToPostsFeedPage = (navigate) => {
    navigate('/posts');
};

export const goToLastPage = (navigate) => {
    navigate(-1);
};

export const goToPostPage = (navigate) => {
    navigate('/posts/:postid');
};

export const goToMobileMenu = (navigate) => {
    navigate('/menu');
};