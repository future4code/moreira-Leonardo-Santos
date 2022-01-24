import React from "react";
import styled from "styled-components";


export default class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <button type="button" onClick={this.props.logar}>Logar</button>
            </div>
        );
    };
};