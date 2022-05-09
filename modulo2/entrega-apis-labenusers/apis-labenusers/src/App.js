import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import LoginForm from './components/LoginForm/LoginForm.js';
import UsersList from './components/UsersList/UsersList.js';

const Page = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        margin: 20px;
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

        this.setState({inputNameValue: '', inputMailValue: ''});
    };
    changePage = () => {
        this.state.currentPage === true ? this.setState({currentPage: false}) : this.setState({currentPage: true});
    };
    // getUsers = () => {
    //     if (!this.state.currentPage) {
    //         const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
            
    //         const header = {
    //             headers: {
    //                 Authorization: "leo-christen-moreira"
    //             }
    //         };

    //         axios.get(url, header)
    //         .then((res) => {
    //             return this.setState({usersList: res.data});
    //         })
    //         .catch((err) => {
    //             console.log(err.res);
    //         });
    //     }
    // };
    getUsers = async () => {
        if (!this.state.currentPage) {
            const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
                    
            const header = {
                headers: {
                    Authorization: "leo-christen-moreira"
                }
            };

            try {
                const res = await axios.get(url, header);

                this.setState({usersList: res.data})
            }
            catch(err) {
                console.log(err.res)
            };
        }    
    };
    componentDidUpdate = () => {
        this.getUsers()
    };
    removeUser = (id) => {

        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

        const header = {
            headers: {
                Authorization: "leo-christen-moreira"
            }
        };

        const answer = window.confirm('Você gostaria mesmo de deletar esse usuário?');

        if (answer) {
            axios.delete(url, header)
            .then((res) => {
                alert('Usuário deletado com sucesso!');
            })
            .catch((err) => {
                console.log(this.state.userId)
                console.log(err.message);
                alert('Opa, algo deu errado tente outra vez');
            });
        }
        else {
            alert('O usuário não foi deletado.');
        }

    };

    render() {

        const pagesShift = () => {
                if (this.state.currentPage) {
                    return (
                        <LoginForm 
                            inputNameValue={this.state.inputNameValue}
                            inputMailValue={this.state.inputMailValue}
                            changeNameValue={this.changeNameValue}
                            changeMailValue={this.changeMailValue}
                            addUsr={this.addUsr}
                        />
                    );
                }
                else {
                    return (
                        <UsersList 
                            usersList={this.state.usersList}
                            removeUser={this.removeUser}
                        />
                    )
                }
        };

        const changeBttn = () => {
            if (this.state.currentPage) {
                return(
                    <button type='button' onClick={this.changePage}>Ver usuários</button>
                );
            }
            else {
                return(
                    <button type='button' onClick={this.changePage}>Adicionar novo usuário</button>
                );
            }
        };

        return (
            <Page>
                <h1>Labenusers</h1>
                {pagesShift()}
                {changeBttn()}
            </Page>
        );
    };
};

export default App;