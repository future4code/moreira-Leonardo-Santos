import React from "react";
import styled from "styled-components";

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
`;

export default class UsersList extends React.Component {
    render() {

        const montaCard = () => {
            const list = this.props.usersList;

            const user = list.map((user) => {
                return (
                    <li key={user.id}>{user.name} <button onClick={() => {this.props.removeUser(user.id)}}>x</button></li>
                );
            });

            return user;
        }

        return(
            <List>
               {montaCard()} 
            </List>
        );
    };
};