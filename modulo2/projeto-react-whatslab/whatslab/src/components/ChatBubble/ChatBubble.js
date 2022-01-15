import React from "react";
import styled from "styled-components";
import App from '../../App.js'

const Bubble = styled.div`
    display: flex;
    align-items: center;
    width: 240px;
    justify-content: space-between;
    border: 1px solid black;
    border-radius: 8px 8px 0 8px;
    padding: 0 10px;
    margin: 10px;
    background: #fff;
`;

const Title = styled.h3` 
    margin: 0 10px 0 0;
`;

const Texto = styled.p`
    width: 60%;
`;

class ChatBubble extends React.Component {
    render() {
        return (
            <Bubble>
                <Title>{this.props.send}:</Title>  
                <Texto>{this.props.msg}</Texto>
            </Bubble>
        );
    };
};

export default ChatBubble;