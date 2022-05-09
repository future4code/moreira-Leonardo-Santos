import React from "react";
import styled from "styled-components";
import MessList from '../MessList/MessList.js'

export default class Messages extends React.Component {
    state = {
        messages: ['mess1','mess2','mess3','mess4','mess5']
    };

    render() {
        const listLength = this.state.messages.length;

        return (
            <div>
                <p>{listLength > 0 ? `Você tem ${listLength} mensagens` : 'Você não tem mensagens'}</p>
                {listLength > 0 && <MessList list={this.state.messages}/>}
            </div>
        );
    }
};