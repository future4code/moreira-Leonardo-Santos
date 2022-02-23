import styled from "styled-components";
import {primary, secondary} from '../../constants/colors.js';

export const Foot = styled.footer`
    width: 100vw;
    position: absolute;
    bottom: 0;
    background-color: ${primary};
    color: ${secondary};
    padding: 1rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
    font-size: 1.2rem; 
    box-shadow: 0px 0px 5px 2.5px grey;
`;