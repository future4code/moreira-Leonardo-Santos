import React from "react";
import styled from "styled-components";
import HomePage from './components/HomePage/HomePage.js';
import LoginPage from "./components/LoginPage/LoginPage.js";

const AppWindow = styled.div`
  text-align: center;
`;

export default class App extends React.Component {
  state = {
    estaLogado: false
  };

  logar = () => {
    this.setState({estaLogado: true})
  };

  deslogar = () => {
    this.setState({estaLogado: false})
  };

  render() {

    const renderizaCompCerto = () => {

      if (this.state.estaLogado) {
        return <HomePage deslogar={this.deslogar}/>
      }
      else {
        return <LoginPage logar={this.logar}/>
      }
    };

    return (
      <AppWindow>
        {renderizaCompCerto()}
      </AppWindow>
    );
  };
};