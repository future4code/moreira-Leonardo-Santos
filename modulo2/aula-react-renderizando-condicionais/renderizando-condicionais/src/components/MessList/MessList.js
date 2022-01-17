import React from "react";
import styled from "styled-components";

export default class MessList extends React.Component {
    render() {

        const eachMessage = this.props.list.map((message) => {
            return <p>{message}</p>
        })

        return (
            <div>
                {eachMessage}
            </div>
        );
    };
};