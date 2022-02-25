import React from "react";
import Footer from '../../components/Footer/Footer.js';
import { PageWrap, Form } from './style.js';
import Title from "../../components/Title/Title.js";
import Input from '../../components/Input/Input.js' 
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../constants/theme.js";
import { primary, secondary } from "../../constants/colors.js";
import { baseUrl } from "../../constants/baseUrl.js";
import { goToRegisterPage, goToPostsFeedPage } from "../../routes/coordinator.js";
import { useNavigate } from "react-router-dom";
import useForm from '../../hooks/useForm.js';
import usePostPutRequirement from "../../hooks/usePostPutRequirement.js";
import { login } from "../../services/users.js";
import useUnprotectedPage from "../../hooks/useUnprotectedPage.js";

const LoginPage = () => {
    const [form, changeInput, clear] = useForm({email: '', password: ''});
    const [getToken, isLoading] = usePostPutRequirement(); 
    const navigate = useNavigate();
    useUnprotectedPage();
    
    const onSubmitForm = async (evt) => {
        evt.preventDefault();

        const {data} = await getToken(`${baseUrl}users/login`, form);

        login(data, clear, isLoading, navigate);
        goToPostsFeedPage(navigate);
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