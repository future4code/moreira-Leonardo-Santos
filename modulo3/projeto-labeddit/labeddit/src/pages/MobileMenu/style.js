import styled from "styled-components";
import {primary, secondary} from '../../constants/colors.js';

export const MenuWrap = styled.div`
    font-family: 'Roboto', sans-serif;
    position: absolute;
    z-index: 1;
    background: ${primary};
    width: 100vw;
    height: 100vh;
    top: 0;
    color: ${secondary};
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`;
