import styled from 'styled-components'

export const StyledMain = styled.main`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    font-family: sans-serif;
    box-sizing: border-box;


    h1{
        font-size: 3rem;

        span{
            font-size: 4rem;
        };
    };

    button{
        margin: 3rem 1.2rem;
        box-sizing: border-box;
        font-size: 1.2rem;
        text-transform: uppercase;
        background-color: white;
        border-radius: 0.25rem;
        padding: 0.55rem;
        cursor: pointer;
    };
`;

export const StyledFixed = styled.div`
    position: fixed;
    background-color: white;
    top: 0;
`