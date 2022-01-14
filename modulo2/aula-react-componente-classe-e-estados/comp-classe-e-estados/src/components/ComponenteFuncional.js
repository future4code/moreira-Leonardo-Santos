import React from "react";
import styled from 'styled-components';

export const ComponenteFuncional = () => {
    const apertou = () => {
        alert('apertou');
    };

    return <div>
            <h2>Componente criado usando a sintaxe de função</h2>
            <button type="button" onClick={apertou}>vamo vê!</button>
        </div>
};


export default ComponenteFuncional;