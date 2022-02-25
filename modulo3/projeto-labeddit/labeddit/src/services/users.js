import { baseUrl } from "../constants/baseUrl.js";
import { goToLoginPage } from "../routes/coordinator.js";

export const register = (body, getToken, token, clear, isLoading, navigate) => {
    getToken(`${baseUrl}users/signup`, body);
    isLoading && console.log('carregando...');
    token && localStorage.setItem('token', `${token.token}`); 
    clear();
    goToLoginPage(navigate);
};

export const login = ({token}, clear, isLoading) => {
    isLoading && console.log('carregando...');
    localStorage.setItem('token', `${token}`);
    clear();
};