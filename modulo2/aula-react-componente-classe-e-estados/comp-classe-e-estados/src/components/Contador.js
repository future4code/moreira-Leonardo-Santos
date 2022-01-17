import React from "react";
import styled from "styled-components";

class Contador extends React.Component {

    state = {
        counter: 0
    }

    somar = () => {
        let valorAtual = this.state.counter;

        this.setState({counter: valorAtual + 1});
    };

    subtrair = () => {
        let valorAtual = this.state.counter;

        this.setState({counter: valorAtual - 1});
    };

    render() {


        return(
            <div>
                <h1>Contador</h1>
                <h2>{this.state.counter}</h2>
                <button type="button" onClick={this.somar}>soma</button>
                <button type="button" onClick={this.subtrair}>subtrai</button>
            </div>
        );
    };
};

export default Contador;