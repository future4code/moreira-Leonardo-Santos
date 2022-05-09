import React from "react";
import styled from "styled-components";

class ComponenteDeClasse extends React.Component{

    apertou = () => {
        return alert('apertou!');
    }

    render() {
        return (
            <div>
                <h2>Componente criado usando sintaxe de classe</h2>
                <button type="button" onClick={this.apertou}>vamo vê!</button>
            </div>
        )
    }
};

export default ComponenteDeClasse;