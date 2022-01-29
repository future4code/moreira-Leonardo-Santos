import React from "react";
import styled from "styled-components";

const Div = styled.div`
    margin: 0.5rem;

    button{
        margin-left: 0.5rem;
    }
`;

export default class CreatePlaylistForm extends React.Component {
    render() {
        return(
            <div>  
                <h1>Labefy</h1>
                <h3>Criar uma Playlist:</h3>
                <form>
                    <label htmlFor="listName">qual será o nome da sua Playlist? </label>
                    <Div>
                        <input type="text" name='listName' onChange={this.props.changeListName} value={this.props.inputValue}/>

                        <button type='button' onClick={this.props.savePlaylist}>Salvar Playlist</button>
                    </Div>
                </form>
            </div>  
        );
    };
};