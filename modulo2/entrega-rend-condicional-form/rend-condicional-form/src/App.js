import React from "react";
import styled from "styled-components";
import Step1 from './Components/Step1/Step1.js';
import Step2 from './Components/Step2/Step2.js';
import Step3 from './Components/Step3/Step3.js';
import Step4 from './Components/Step4/Step4.js';

const MainContainer = styled.div`
  text-align: center;
`;

export default class App extends React.Component {
  state = {
    currentStep: ''
  };

  render() {
    return (
      <MainContainer>
        <Step3/>
      </MainContainer>
    );
  };
};