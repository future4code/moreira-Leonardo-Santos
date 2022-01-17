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

const Select = styled.select`
    width: 9rem;
    margin: 0 auto;
    
`;

export default class Step3 extends React.Component {
    render() {
        return (
            <Form>
                <Title>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</Title>
                <label htmlFor="">5. Por que você não terminou um curso de graduação?

</label>
                <Input type="text" />
                <label htmlFor="">6. Você fez algum curso complementar?</label>
                <Select name="">
                    <option value="">Nenhum</option>
                    <option value="">Curso técnico</option>
                    <option value="">Curso de inglês</option>
                </Select>
            </Form>
        );
    };
};