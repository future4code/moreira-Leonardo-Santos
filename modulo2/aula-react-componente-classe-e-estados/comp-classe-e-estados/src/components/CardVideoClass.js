import React from "react";
import styled from 'styled-components';

const Container = styled.div`
    width: 200px;
    height: 250px;
    margin: 30px auto;
    border: 1px black solid;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
`;

class CardVideoClass extends React.Component {
    render() {
        return (
            <Container>
                <img src={this.props.src} />
                <h3>{this.props.titulo}</h3>
            </Container>
        )
    }
};

export default CardVideoClass;