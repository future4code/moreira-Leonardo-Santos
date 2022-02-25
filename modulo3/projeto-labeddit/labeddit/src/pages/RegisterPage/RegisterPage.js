import React from "react";
import Footer from '../../components/Footer/Footer.js';
import { PageWrap, Form } from './style.js';
import Title from "../../components/Title/Title.js";
import Input from '../../components/Input/Input.js' 
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../constants/theme.js";
import { primary } from "../../constants/colors.js";
import useForm from '../../hooks/useForm.js';
import usePostPutRequirement from '../../hooks/usePostPutRequirement.js';
import { register } from "../../services/users.js";
import { useNavigate } from "react-router-dom";
import useUnprotectedPage from "../../hooks/useUnprotectedPage.js";

const RegisterPage = () => {
    const [form, changeInput, clear] = useForm({username:'', email: '', password:''});
    const [token, getToken, isLoading] = usePostPutRequirement(); 
    const navigate = useNavigate();
    useUnprotectedPage();

    const onSubmitForm = (evt) => {
        evt.preventDefault();
        register(form, getToken, token, clear, isLoading, navigate);
    };

    return(
        <ThemeProvider theme={theme}>
            <PageWrap>
                <Title pgName='Cadastro'/>
                <Form onSubmit={onSubmitForm}>
                    <Input 
                        placeholder={'Digite aqui como gosta de ser chamade'}
                        type={'text'}
                        name={'username'}
                        value={form.username}
                        onChange={changeInput}      
                    />
                    <Input 
                        placeholder={'Digite aqui um email válido'}
                        type={'email'}
                        name={'email'}
                        value={form.email}
                        onChange={changeInput}      
                    />
                    <Input 
                        placeholder={'Digite aqui a sua senha'}
                        name={'password'}
                        value={form.password}
                        onChange={changeInput}
                        pattern="^(?=.*\d).{8,30}$"
                        title='A senha deve ter entre 8 e 30 caracteres'
                        type={'password'}
                    />
                    <Button 
                        type='submit'
                        color='secondary'
                        variant='contained'
                        sx={{ width: '10rem', margin: '1.25rem', color: `${primary}`, fontWeight: 'bold', border: `2px solid ${primary}`}}
                    >Cadastrar-se</Button>
                </Form>
                <Footer/>
            </PageWrap>
        </ThemeProvider>  
    )
};
export default RegisterPage;