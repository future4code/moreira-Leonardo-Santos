import React from 'react';
import styled from 'styled-components';

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`;

const FotoUsr = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
`;

const CardTitle = styled.h4`
    margin-bottom: 15px;
`;

function CardGrande(props) {
    return (
        <BigCardContainer>
            <FotoUsr src={ props.imagem } />
            <TextWrapper>
                <CardTitle>{ props.nome }</CardTitle>
                <p>{ props.descricao }</p>
            </TextWrapper>
        </BigCardContainer>
    )
}

export default CardGrande;