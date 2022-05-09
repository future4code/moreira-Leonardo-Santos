import React from "react";
import styled from 'styled-components';

const LittleCard = styled.div`
    height: 50px;
    width: 40vw;
    border: 1px solid black;
    padding: 10px 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
`;
const IconeMail = styled.img`
    width: 30px;
`;
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`;

const CardPequeno = (props) => {
    
    return (<LittleCard>
        <Wrapper>
        <IconeMail src={props.imagem}/>
        <h4>{props.titulo}</h4>
        </Wrapper>

        <p>{props.texto}</p>
        
    </LittleCard>)
    
};

export default CardPequeno;