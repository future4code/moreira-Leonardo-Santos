import React from "react";
import styled from 'styled-components';
import ChatBubble from './components/ChatBubble/ChatBubble.js'

const MainContainer = styled.div`
  height: 80vh;
  width: 340px;
  margin: 60px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid black;
  border-radius: 18px;
  background: url('https://cdn.pixabay.com/photo/2019/03/03/20/23/flowers-4032775__340.png');
  padding: 20px;
`;

const PageTitle = styled.h1`
  position: fixed;
  top: 0;
`;

class App extends React.Component{

  state = {
    messages: [
      {
        sendBy: "Leo",
        msg: "Lorem, ipsum dolor sit."
      },
      {
        sendBy: "Daru",
        msg: "bla bla bla bla bla bla bla bla"
      }
    ]
  };

  render() {

    const chat = this.state.messages.map((message) => {
      return <ChatBubble send={message.sendBy} msg={message.msg} />
    });

    

    return (
      <MainContainer>
        <PageTitle>WhatsLab</PageTitle>
        {chat}
      </MainContainer>
    );  
  };
};

export default App;
