import styled from "styled-components";
import {Link} from 'react-router-dom';

export const Head = styled.header`
    text-align: center;
    background-color: purple;
    `;
export const LinkStyled = styled(Link)`
    text-decoration: none;
    color: orange;
    font-size: 2.5rem;
    font-family: sans-serif;
    letter-spacing: 0.25rem;

    h1{
        padding: 1rem;
        font-weight: 900;
    }
`;
export const NavBar = styled.nav`
    width: 100%;
    background-color: orange;
    padding: 0.55rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    button{
        width: 5.5rem;
        height: 2.5rem;
        margin: 0.25rem 0.5rem;
        padding: 0.25rem;
        text-transform: uppercase;
        background: purple;
        border: none;
        border-radius: 0.35rem;
        color: orange;
        font-weight: 800;
        cursor: pointer;
    }
`;