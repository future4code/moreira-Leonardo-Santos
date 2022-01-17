import React from "react";
import styled from "styled-components";
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Step4 from './components/Step4';

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

      </MainContainer>
    );
  };
};