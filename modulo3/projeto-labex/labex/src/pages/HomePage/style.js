import styled from "styled-components";

export const HomeContainer = styled.main`
    text-align: center;
    font-family: sans-serif;

    div{
        display: flex;
        flex-direction: column-reverse;
    }
    img{
        width: 100vw;
    }
    p{
        font-size: 1.25rem;
        display: block;
        width: 60vw;
        margin: 0 auto;
        color: purple;
    }
`;
export const HomeTitle = styled.h2`
    padding: 2rem;
    font-size: 2.5rem;
    font-weight: 700;
`;