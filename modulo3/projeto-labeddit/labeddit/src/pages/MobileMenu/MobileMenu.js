import React, {useState} from "react";
import { MenuWrap } from "./style";
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../constants/theme.js";
import { useNavigate } from "react-router-dom";
import { goToLastPage, goToLoginPage, goToRegisterPage } from "../../routes/coordinator.js";
import { logout } from "../../services/users.js";

const MobileMenu = () => {
    const token = localStorage.getItem('token');
    const [firstButtonName, setFirstButtonName] = useState(token ? 'Feed' : 'Login');
    const [lastButtonName, setLastButtonName] = useState(token ? 'Logout' : 'Cadastro');
    const navigate = useNavigate();

    const rightAction = () => {
        if (token) {
            setFirstButtonName('Login');
            setLastButtonName('Cadastro');
            logout(navigate);
        }
        else {
            goToRegisterPage(navigate);
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <MenuWrap>
                <IconButton
                    aria-label='close menu icon'
                    size="large"
                    color="secondary"
                    sx={{ mr: 2, position: 'fixed', top: 0, right: 0, marginRight: 0 }}
                    onClick={() => goToLastPage(navigate)}
                >
                    <CloseIcon sx={{ fontSize: '2.5rem' }}/> 
                </IconButton>
                <Button 
                    color='secondary'
                    variant='outlined'
                    sx={{ width: '10rem', marginBottom: '3rem' }}
                    onClick={() => {goToLoginPage(navigate)}}
                >{firstButtonName }</Button>
                <Button
                    color='secondary'
                    variant='outlined'
                    sx={{ width: '10rem', marginBottom: '3rem' }}
                    onClick={() => {rightAction()}}
                >{lastButtonName}</Button>
            </MenuWrap>
        </ThemeProvider>
    );
};
export default MobileMenu;