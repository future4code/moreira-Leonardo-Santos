import axios from "axios";
import React from "react";
import styled from "styled-components";
import UserInfo from '../UserInfo/UserInfo.js'

const List = styled.ul`
    list-style: none;

    li{
        margin: 0 auto 8px auto;
        margin-left: -40px;
        border: 1px solid black;
        width: 500px;
        padding: 0 5px 0 20px;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    div{
        border: 1px solid black;
        text-align: center; 
        box-sizing: border-box;
        padding: 20px;
        margin-left: -40px;
    }
`;

export default class UsersList extends React.Component {

    state = {
        userInfo: {},
        currentPage: true
    };

    getUserInfo = async (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`;

        const header = {
            headers:{
                Authorization: "leo-christen-moreira"
            }
        };

        try{
            const res = await axios.get(url, header);

            const userInfo = {
                name: res.data.name,
                email: res.data.email,
                id: res.data.id
            }

            this.setState({userInfo: userInfo, currentPage: false});
        }
        catch(err) {
            console.log(err.res);
        };
    }
    changePage = () => {
        this.setState({currentPage: true})
    }

    render() {

        const montaCard = () => {
            const list = this.props.usersList;

            const user = list.map((user) => {
                return (
                    <li key={user.id} onClick={() => {this.getUserInfo(user.id)}}>{user.name} <button onClick={() => {this.props.removeUser(user.id)}}>x</button></li>
                );
            });

            return user;
        }

        const switchPage = () => {
            if (!this.state.currentPage) {
                return(
                    <div>
                        <h3>{`Informações de ${this.state.userInfo.name}`}</h3>
                        <p>{`Email: ${this.state.userInfo.email}`}</p>
                        <button type="button" onClick={this.changePage} >Voltar</button>
                        <button type="button" onClick={() => {this.props.removeUser(this.state.userInfo.id)}}>Apagar</button>
                    </div>
                );
            }
            else {
                return(montaCard());
            }
        }

        return(
            <List>
               {switchPage()}
            </List>
        );
    };
};