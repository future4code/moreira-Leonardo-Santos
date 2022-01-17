import React from "react";
import styled from "styled-components";

const Form = styled.form`
    margin: 20px auto;
    width: 50%;
    display: flex;
    justify-content: space-around;
`;

class Formulario extends React.Component {

    state = {
        valorNome: "",
        valorIdade: ""
    }

    mudaNome = (event) => {
        return this.setState({valorNome: event.target.value});
    };
    
    mudaIdade = (event) => {
        return this.setState({valorIdade: event.target.value});
    };

    erase = () => {
        this.setState({valorNome: ""});
        this.setState({valorIdade: ""});
    }

    render() {
        return (
            <div>
                <Form>
                    <input placeholder="Nome" onChange={this.mudaNome} value={this.state.valorNome} type="text" />
                    <input placeholder="Idade" onChange={this.mudaIdade} value={this.state.valorIdade} type="number" />
                    <button type="button" onClick={this.erase}>Send</button>
                </Form>
            </div>
        ) 
    }
};
export default Formulario;
