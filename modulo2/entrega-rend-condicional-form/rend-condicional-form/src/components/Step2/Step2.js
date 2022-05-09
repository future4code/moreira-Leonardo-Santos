import React from "react";
import styled from "styled-components";

const Title = styled.h2`
    text-transform: uppercase;
`; 

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 35vh;
`;

const Input = styled.input`
    width: 10rem;
    margin: 0 auto 1rem auto;
`;

export default class Step2 extends React.Component {
    render() {
        return (
            <Form>
                <Title>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</Title>
                <label htmlFor="">5. Qual curso?</label>
                <Input type="text" />
                <label htmlFor="">6. Qual é unidade de ensino?</label>
                <Input type="text" name="" id="" />
            </Form>
        );
    };
};