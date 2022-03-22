import { baseUrl } from "../constants/baseUrl.js";
import { goToLoginPage, goToPostsFeedPage } from "../routes/coordinator.js";

export const register = async (body, getToken, clear, isLoading, navigate) => {
    const {data} = await getToken(`${baseUrl}users/signup`, body);
    isLoading && console.log('carregando...');
    localStorage.setItem('token', `${data.token}`); 
    clear();
    goToLoginPage(navigate);
};

export const login = async (getToken, body, clear, isLoading, navigate) => {
    const {data} = await getToken(`${baseUrl}users/login`, body);
    isLoading && console.log('carregando...');
    localStorage.setItem('token', `${data.token}`);
    clear();
    goToPostsFeedPage(navigate)
};

export const logout = (navigate) => {
    localStorage.removeItem('token');
    goToLoginPage(navigate);
};