import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const FormContainer = styled.form`
  height: 100px;
  margin: 5px 0 50px 0;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    posts: [
      {
        nome: "paulinha",
        foto: "https://picsum.photos/50/50",
        postFoto: "https://picsum.photos/200/150"
      },
      {
        nome: "vanda-fia-da-vanda",
        foto: "https://picsum.photos/50/70",
        postFoto: "https://picsum.photos/200/159"
      },
      {
        nome: "lauriele-quebração",
        foto: "https://picsum.photos/50/180",
        postFoto: "https://picsum.photos/200/100"
      }
    ], 
    inputNomeValue: "",
    inputFotoValue: "",
    inputPostFotoValue: ""
  }

  addPost = () => {
    const novoPost = {
      nome: this.state.inputNomeValue,
      foto: this.state.inputFotoValue,
      postFoto: this.state.inputPostFotoValue,
    };

    const novosPosts = [...this.state.posts, novoPost];

    this.setState({posts: novosPosts, inputNomeValue: "", inputFotoValue: "", inputPostFotoValue: ""});
  };
  onChangeNome = (event) => {
    this.setState({inputNomeValue: event.target.value});
  };
  onChangeFoto = (event) => {
    this.setState({inputFotoValue: event.target.value});  
  };
  onChangePostFoto = (event) => {
    this.setState({inputPostFotoValue: event.target.value});
  };

  render() {

    const copiaPessoas = this.state.posts.map((pessoa) => {
      return( 
        <Post
          nomeUsuario={pessoa.nome}
          fotoUsuario={pessoa.foto}
          fotoPost={pessoa.postFoto}
        />
      )
    });

    return (
      <MainContainer>
        {copiaPessoas}
        <FormContainer>
          <input placeholder='Nome da pessoa' value={this.state.inputNomeValue} onChange={this.onChangeNome} type="text" />
          <input placeholder='Url da foto de perfil' value={this.state.inputFotoValue} onChange={this.onChangeFoto} type="text" />
          <input placeholder='Url da foto do post' value={this.state.inputPostFotoValue} onChange={this.onChangePostFoto} type="text" />
          <button type='button' onClick={this.addPost}>Adicionar post</button>
        </FormContainer>
      </MainContainer>
    );
  }
}

export default App;
