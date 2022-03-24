import { Link } from "react-router-dom";
import styled from "styled-components";

export const Foot = styled.footer`
    background-color: orange;
    font-family: sans-serif;
    padding: 0.45rem;
    width: 100vw;  
    position: absolute;
    bottom: -5rem;
    z-index: 1;
`;
export const FootLinkWrapp = styled.div`
    display: flex;
    justify-content: space-between;

    .link, a{
        text-decoration: none;
        margin: 0.25rem 0;    
    }
    div{
        display: flex;
        flex-direction: column;
        text-align: right;
    }
`;
export const LinkStyled = styled(Link)`
    text-decoration: none;

    h4{
      font-size: 2.35rem;
      font-weight: 800;
      margin-right: 0.45rem; 
    }
`;