import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 150px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px black solid;
    width: fit-content;
    justify-content: space-around; 

    input{
        width: 180px;
    }
`;

export default class LoginForm extends React.Component {
    render() {
        return(
            <Form>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name='name'placeholder='digite seu nome aqui' value={this.props.inputNameValue} onChange={this.props.changeNameValue}/>
                </div>    
        
                <div>
                    <label htmlFor="mail">Email: </label>
                    <input type="text" name='mail' placeholder='digite aqui seu email' value={this.props.inputMailValue} onChange={this.props.changeMailValue}/>
                </div>    
        
                <button type='button' onClick={this.props.addUsr}>Adicionar usuário</button>
            </Form>
        );
    }
};