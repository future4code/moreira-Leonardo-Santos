import { useNavigate } from "react-router-dom";

export const goToLoginPage = () => {
    useNavigate('./');
};

export const goToRegisterPage = () => {
    useNavigate('./cadastro');
};

export const goToPostsFeedPage = () => {
    useNavigate('./posts');
};

export const goToPostPage = () => {
    useNavigate('./posts/:postid');
};