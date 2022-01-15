import React from "react";
import styled from "styled-components";
import App from '../../App.js'

const Bubble = styled.div`
    display: flex;
    align-items: center;
    width: 240px;
    justify-content: space-around;
    border: 1px solid black;
    border-radius: 8px;
`;

class ChatBubble extends React.Component {
    render() {
        return (
            <Bubble>
                <h3>{this.props.send}:</h3>  
                <p>{this.props.msg}</p>
            </Bubble>
        );
    };
};

export default ChatBubble;