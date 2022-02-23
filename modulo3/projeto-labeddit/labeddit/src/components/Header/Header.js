import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { ThemeProvider } from "@mui/material/styles";
import theme from '../../constants/theme.js'

const Header = () => {
    return(
        <ThemeProvider theme={theme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar 
                    position="static" 
                    color='primary'
                >
                    <Toolbar>   
                        <Typography 
                            variant="h6" 
                            component="div" 
                            sx={{ flexGrow: 1, fontSize: '2rem'}}
                            color='secondary'
                        >LabEddit
                        </Typography>
                        <IconButton
                            variant='outlined'
                            edge='end'
                            size="large"
                            color="secondary"
                            aria-label="menu"
                            sx={{ mr: 2, marginRight: -1.5}}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* <Button 
                            color="secondary"
                            variant='outlined'
                        >Cadastrar-se
                        </Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </ThemeProvider>
    );
};
export default Header;