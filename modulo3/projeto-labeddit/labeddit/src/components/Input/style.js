import styled from "styled-components";
import { primary } from "../../constants/colors.js";

export const StyledInput = styled.input`
    border: none;
    border-radius: 6px;
    width: 80vw;
    max-width: 250px;
    margin: 1rem auto;
    height: 1.5rem;
    background: #EBEBEB;
    outline-color: ${primary};
    padding-left: 1rem; 
    
    ::placeholder{
        color: #858585;
    }
`;