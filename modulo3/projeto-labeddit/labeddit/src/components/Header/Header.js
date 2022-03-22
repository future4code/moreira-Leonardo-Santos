import React, {useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/material/styles";
import theme from '../../constants/theme.js'
import { useNavigate, useLocation } from 'react-router-dom';
import {goToMobileMenu, goToRegisterPage, goToLoginPage} from '../../routes/coordinator.js';
import { logout } from '../../services/users.js';

const Header = () => {
    const isMobile = window.innerWidth < 700;
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const [buttonName, setButtonName] = useState('Logout');

    const changeButton = () => {
        token ? setButtonName('Logout') : setButtonName('cadastre-se');
    }

    useEffect(() => {
        changeButton(); 
    }, [token]);


    const rightAction = () => {

        if (token) {
            logout(navigate);
        }    
        else if (pathname === '/cadastro') {
            setButtonName('Cadastre-se');
            goToLoginPage(navigate);
        }
        else if (pathname === '/') {
            setButtonName('Login');
            goToRegisterPage(navigate);
        }
    };
    
    const changeMenu = ( isMobile ? <IconButton size="large" color="secondary" aria-label="menu" sx={{ mr: 2, marginRight: -1.5}} onClick={() => {goToMobileMenu(navigate)}}><MenuIcon sx={{fontSize: '2.5rem'}}/></IconButton> : <Button color="secondary" variant='outlined' onClick={() => rightAction()} >{buttonName}</Button> )


    return(
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1, width: '100vw' }}>
                <AppBar 
                    position="static" 
                    color='primary'
                >
                    <Toolbar>   
                        <Typography 
                            variant="h1" 
                            component="div" 
                            sx={{ flexGrow: 1, fontSize: '2rem', fontWeight: 'bold'}}
                            color='secondary'
                        >LabEddit
                        </Typography>
                        {changeMenu}
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};
export default Header;