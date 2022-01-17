import React from "react";
import styled from "styled-components";
import Posts from "../Posts/Posts.js";
import Messages from "../Messages/Messages.js";

export default class HomePage extends React.Component {
    state = {
        currentScreen: ''
    }

    toPosts = () => {
        this.setState({currentScreen: 'posts'})
    };
    toMessages = () => {
        this.setState({currentScreen: 'messages'})
    };

    render() {

        const showRightScreen = () => {
            switch (this.state.currentScreen) {
                case 'posts':
                    return <Posts/>;
                case 'messages':    
                    return <Messages/>;
                default:
                    return <p>'Página não encontrada'</p>;
            }
        };

        return (
            <div>
                <h1>Home</h1>
                <button type="button" onClick={this.toPosts}>Posts</button>
                <button type="button" onClick={this.toMessages}>Mensagens</button>
                <button type="button" onClick={this.props.deslogar}>Sair</button>
                {showRightScreen()}
            </div>
        );
    };
};