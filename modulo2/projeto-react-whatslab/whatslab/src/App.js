import React from "react";
import styled from 'styled-components';
import ChatBubble from './components/ChatBubble/ChatBubble.js';

const MainContainer = styled.div`
  height: 70vh;
  width: 340px;
  margin: 50px auto 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border: 1px solid darkgreen;
  border-radius: 18px 18px 0 0;
  background: url('https://cdn.pixabay.com/photo/2019/03/03/20/23/flowers-4032775__340.png');
  background-repeat: no-repeat;
  background-size: cover;
  padding: 20px;
`;

const PageTitle = styled.h1`
  color: darkgreen;
  position: fixed;
  top: -10px;
`;

const StyledForm = styled.form`
    height: 200px;
    position: fixed;
    bottom: 20px;
    border-radius: 0 0 18px 18px; 
    z-index: -1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 380px;
    font-weight: bold;
    border: 1px solid darkgreen;
`;

const AddBttn = styled.button`
    position: fixed;
    bottom: 45px;
    width: 200px;
    height: 40px;
    cursor: pointer;
    border-radius: 8px;
    border: 1px solid lightgreen;
    background: darkgreen;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;

    &:hover {
      background: lightgreen;
      color: darkgreen;
      border: #fff;
    }
`;

const InputName = styled.input`
    width: 100px;
    height: 1.3rem;
    border-radius: 8px;
    border: none;
    border-bottom: 1px solid darkgreen;
    outline: none; 
`;

const InputMsg = styled.input`
    width: 200px;
    height: 1.3rem;
    border-radius: 8px;
    border: none;
    border-bottom: 1px solid darkgreen;
    outline: none; 
`;

class App extends React.Component{

  state = {
    messages: [],

    inputNameValue: "",
    inputMsgValue: ""
  };

  sendMsg = () => {
    const newMsg = {
      sendBy: this.state.inputNameValue,
      msg: this.state.inputMsgValue
    }

    const copyOfMessages = [...this.state.messages, newMsg];

    this.setState({messages: copyOfMessages});

    this.setState({inputNameValue: ""});
    this.setState({inputMsgValue: ""});
  };
  onChangeName = (event) => {
    this.setState({inputNameValue: event.target.value});
  };
  onChangeMsg = (event) => {
    this.setState({inputMsgValue: event.target.value});
  };

  render() {

    const chat = this.state.messages.map((message) => {
      return <ChatBubble send={message.sendBy} msg={message.msg} />
    });

    return (
      <MainContainer>
        <PageTitle>WhatsLab</PageTitle>
        {chat}
        <StyledForm>
            <div>
                <InputName placeholder="Nome" type="text" id="nome" value={this.state.inputNameValue} onChange={this.onChangeName}/>
            </div>
            <div>
                <InputMsg placeholder="Mensagem" type="text" id="msg" value={this.state.inputMsgValue} onChange={this.onChangeMsg}/>
            </div>
        </StyledForm>
        <AddBttn onClick={this.sendMsg}>Enviar</AddBttn>
      </MainContainer>
    );  
  };
};

export default App;