import React, { useState } from "react";
import Footer from '../../components/Footer/Footer.js';
import { PageWrap, Form } from './style.js';
import Title from "../../components/Title/Title.js";
import Input from '../../components/Input/Input.js' 
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../constants/theme.js";
import { primary, secondary } from "../../constants/colors.js";
import { goToRegisterPage } from "../../routes/coordinator.js";
import { useNavigate } from "react-router-dom";
import useForm from '../../hooks/useForm.js';
import usePostRequirement from "../../hooks/usePostRequirement.js";
import { baseUrl } from "../../constants/baseUrl.js";

const LoginPage = () => {
    const [form, changeInput, clear] = useForm({email: '',password: ''});
    const navigate = useNavigate();
    const [token, getToken] = usePostRequirement(`${baseUrl}users/login`, form); 


    
    const onSubmitForm = (evt) => {
        evt.preventDefault();
        login();
        
        const test = localStorage.getItem('token');
        console.log(test);

        clear();
    };
    
    const login = () => {
        getToken();
        token === undefined ? console.log('num tem ainda') : localStorage.setItem('token', `${token}`);
    };

    return(
        <ThemeProvider theme={theme}>
            <PageWrap>
                <Title pgName='Login'/>
                <Form onSubmit={onSubmitForm}>
                    <Input 
                        placeholder={'Digite aqui o seu email'}
                        type={'email'}
                        name={'email'}
                        value={form.email}
                        onChange={changeInput}
                        />
                    <Input 
                        placeholder={'Digite aqui a sua senha'}
                        type={'password'}
                        name={'password'}
                        value={form.password}
                        onChange={changeInput}
                        />
                    <Button 
                        type='submit'
                        color='secondary'
                        variant='contained'
                        sx={{ width: '10rem', margin: '1.25rem', color: `${primary}`, fontWeight: 'bold', border: `2px solid ${primary}`}}
                    >Login</Button>
                </Form>
                <p>Ainda não está cadastrade em nossa plataforma? Venha compartilhar ideias com a gente!</p>
                <Button 
                    color='primary'
                    variant='contained'
                    sx={{ width: '10rem', margin: '1rem', color: `${secondary}`, fontWeight: 'bold', border: `2px solid ${secondary}`}}
                    onClick={() => {goToRegisterPage(navigate)}}
                    >Cadastre-se</Button>
                <Footer/>
            </PageWrap>
        </ThemeProvider>    
    )
};
export default LoginPage;