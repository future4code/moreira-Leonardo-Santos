import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Page = styled.div`
    text-align: center;

    button{
        margin: 20px;
    }
`;
const Form = styled.form`
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 150px;
    padding: 10px;
    box-sizing: border-box;
    border: 1px black solid;
    width: fit-content;
    justify-content: space-around; 

    input{
        width: 180px;
    }
`;

class App extends React.Component {

    state = {
        inputNameValue: '',
        inputMailValue: '',
        currentPage: true,
        usersList: [],
        userId: ''
    };

    changeNameValue = (evt) => {
        this.setState({inputNameValue: evt.target.value});
    };
    changeMailValue = (evt) => {
        this.setState({inputMailValue: evt.target.value});
    };
    addUsr = () => {
        const createUsrUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        
        const header = {
            headers: {
                Authorization: "leo-christen-moreira"
            }
        };

        const body = {
            "name": this.state.inputNameValue,
            "email": this.state.inputMailValue
        };

        axios.post(createUsrUrl, body, header)
        .then((res) => {
            alert('Usuário adicionado com sucesso!');
        })
        .catch((err) => {
            alert('Tente outra vez!');
        });

    };
    changePage = () => {
        this.state.currentPage === true ? this.setState({currentPage: false}) : this.setState({currentPage: true});

        console.log(this.state.usersList);
    };
    componentDidUpdate = () => {
        if (!this.state.currentPage) {
            const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
            
            const header = {
                headers: {
                    Authorization: "leo-christen-moreira"
                }
            };

            axios.get(url, header)
            .then((res) => {
                return this.setState({usersList: res.data});
            })
            .catch((err) => {
                console.log(err);
            });
        }
    };
    removeUser = (evt) => {

        this.setState({userId: evt.target.id});
        console.log(typeof evt.target.id);

        const id = this.state.userId;

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

        const header = {
            headers: {
                Authorization: "leo-christen-moreira"
            }
        };

        axios.delete(url, header)
        .then((res) => {
            alert('Usuário deletado com sucesso!');
        })
        .catch((err) => {
            console.log(this.state.userId)
            console.log(err.message);
            alert('Opa, algo deu errado tente outra vez');
        });

    };

    render() {

        const montaCard = () => {
            const list = this.state.usersList;

            const user = list.map((user) => {
                return (
                    <li key={user.id}>{user.name} <button id={user.id} onClick={this.removeUser}>x</button></li>
                );
            });

            return user;
        }

        const pagesShift = () => {
                if (this.state.currentPage) {
                    return (
                        <Form>
                            <div>
                                <label htmlFor="name">Nome: </label>
                                <input type="text" name='name'placeholder='digite seu nome aqui' value={this.state.inputNameValue} onChange={this.changeNameValue}/>
                            </div>    
        
                            <div>
                                <label htmlFor="mail">Email: </label>
                                <input type="text" name='mail' placeholder='digite aqui seu email' value={this.state.inputMailValue} onChange={this.changeMailValue}/>
                            </div>    
        
                            <button type='button' onClick={this.addUsr}>Adicionar usuário</button>
                        </Form>
                    );
                }
                else {
                    return (
                        <ul>
                           {montaCard()} 
                        </ul>
                    )
                }
        };

        return (
            <Page>
                <h1>Labenusers</h1>
                {pagesShift()}
                <button type='button' onClick={this.changePage}>Ver usuários</button>
            </Page>
        );
    };
};

export default App;