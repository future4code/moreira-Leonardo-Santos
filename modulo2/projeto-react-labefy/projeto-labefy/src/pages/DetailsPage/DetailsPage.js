import React from "react";
import {Form, List, Div} from './style.js';

const DetailsPage = (props) => {

    const playlistTracks = props.currentPlaylist.map((track) => {
        return(
          <Div key={track.id}>
            <h4>{track.name}</h4>
            <p>{track.artist}</p>
            <div>
              <audio src={track.url} controls></audio>
              <button type='button' onClick={() => {props.removeSong(track.id)}}>x</button>
            </div>  
          </Div>
        );
      });

    return (
        <>
            <h2>{props.detailTitle}</h2>
            <p>{`${props.currentPlaylistTracksNum} música(s)`}</p>
            <h3>adicionar música à playlist:</h3>
            <Form>
                <div>
                  <label htmlFor="trackName">Qual é o nome da musica? </label>
                  <input type="text" name='trackName' value={props.newSongName} onChange={props.onChangeMusicName}/>
                </div>

                <div>
                  <label htmlFor="bandOrArtist">Qual é o nome da banda ou da pessoa cantora? </label>
                  <input type="text" name='bandOrArtist' value={props.newSongArtist} onChange={props.onChangeMusicArtist}/>
                </div>

                <div>
                  <label htmlFor="url">Qual é a URL da música? </label>
                  <input type="text" name='url' value={props.newSongUrl} onChange={props.onChangeMusicUrl}/>
                </div>

                <button type='button' onClick={props.addTrackToPlaylist}>Salvar música</button>
            </Form>
            <hr />
            <List>{playlistTracks}</List>
            <button onClick={props.backToPlaylists}>Voltar</button>
        </>
    );
};
export default DetailsPage;