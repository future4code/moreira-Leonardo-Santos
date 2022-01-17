import React from "react";
import styled from "styled-components";
import Step1 from './Components/Step1/Step1.js';
import Step2 from './Components/Step2/Step2.js';
import Step3 from './Components/Step3/Step3.js';
import Step4 from './Components/Step4/Step4.js';

const MainContainer = styled.div`
  text-align: center;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Button = styled.button`
  width: fit-content;
  margin: 0 auto;
`;

export default class App extends React.Component {
  state = {
    currentStep: ''
  };

  changeStateValue = () => {
    switch (this.state.currentStep) {
      case '':
        return this.setState({currentStep: 'step1'});

      case 'step1':
        return this.setState({currentStep: 'step2'});

      case 'step2':
        return this.setState({currentStep: 'step3'});
        
      default:
        return this.setState({currentStep: ''});

    };
  };

  render() {
    const changePage = () => {
      switch (this.state.currentStep) {
        case '':
          return <Step1/>;

        case 'step1':
          return <Step2/>;

        case 'step2':
          return <Step3/>;

        case 'step3':
          return <Step4/>;
      
        default:
          return <h2>Página não encontrada</h2>;
      };
  
    };
    return (
      <MainContainer>
        {changePage()}
        <Button type="button" onClick={this.changeStateValue}>Próxima etapa</Button>
      </MainContainer>
    );
  };
};