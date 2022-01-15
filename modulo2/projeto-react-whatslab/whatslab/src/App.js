import React from "react";
import styled from 'styled-components';
import ChatBubble from './components/ChatBubble/ChatBubble.js'

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

class App extends React.Component{

  state = {
    messages:
    {
        sendBy: "Leo",
        msg: "Lorem, ipsum dolor sit."
    }
    
  };

  render() {
    
    

    return (
      <MainContainer>
        <h1>WhatsLab</h1>
        <ChatBubble send={this.state.messages.sendBy} msg={this.state.messages.msg} />
      </MainContainer>
    );  
  };
};

export default App;
