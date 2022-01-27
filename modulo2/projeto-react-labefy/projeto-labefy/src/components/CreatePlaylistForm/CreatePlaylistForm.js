import React from "react";
import styled from "styled-components";

export default class CreatePlaylistForm extends React.Component {
    render() {
        return(
            <div>  
                <h1>Labefy</h1>
                <h3>Criar uma Playlist:</h3>
                <form>
                    <label htmlFor="listName">qual será o nome da sua Playlist? </label>
                    <input type="text" name='listName' onChange={this.props.changeListName}/>

                    <button type='button' onClick={this.props.savePlaylist}>Salvar Playlist</button>
                </form>
            </div>  
        );
    };
};