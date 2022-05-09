import React from "react";
import styled from "styled-components";

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
    width: 10rem;
    margin: 0 auto;
    
`;

const Title = styled.h2`
    text-transform: uppercase;
`; 

export default class Step1 extends React.Component {
    state = {
        gradeValue: ''
    };

    render() {
        return (
            <Form>
                <Title>Etapa 1 - Dados Gerais</Title>
                <label htmlFor="usrName">1. Qual é o seu Nome?</label>
                <Input type="text" name="usrName"/>

                <label htmlFor="usrAge">2. Qual é a sua idade?</label>
                <Input type="text" name="usrAge"/>

                <label htmlFor="usrMail">3. Qual é seu email?</label>
                <Input type="text" name="usrMail"/>

                <label htmlFor="usrGrade">4. Qual é a sua escolaridade</label>
                <Select name="usrGrade">
                    <option value="EM">Ensino médio completo</option>
                    <option value="EM">Ensino médio incompleto</option>
                    <option value="ES">Ensino superior completo</option>
                    <option value="ES">Ensino superior incomleto</option>
                </Select>
            </Form>
        );
    };
};