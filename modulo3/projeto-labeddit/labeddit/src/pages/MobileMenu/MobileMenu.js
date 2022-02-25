import React from "react";
import { MenuWrap } from "./style";
import IconButton from '@mui/material/IconButton';
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../constants/theme.js";
import { useNavigate } from "react-router-dom";
import { goToLastPage, goToLoginPage, goToRegisterPage } from "../../routes/coordinator.js";

const MobileMenu = (props) => {
    const navigate = useNavigate();

    return (
        <ThemeProvider theme={theme}>
            <MenuWrap>
                {/* <CloseIcon aria-label='close menu icon'>X</CloseIcon>*/}
                <IconButton
                    size="large"
                    color="secondary"
                    aria-label="close"
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
                >Login</Button>
                <Button
                    color='secondary'
                    variant='outlined'
                    sx={{ width: '10rem', marginBottom: '3rem' }}
                    onClick={() => {goToRegisterPage(navigate)}}
                >Cadastro</Button>
            </MenuWrap>
        </ThemeProvider>
    );
};
export default MobileMenu;