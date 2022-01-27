import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import CreatePlaylistForm from './components/CreatePlaylistForm/CreatePlaylistForm.js';

class App extends React.Component {

  state = {
    playlistName: ''
  };

  changeListName = (evt) => {
    this.setState({playlistName: evt.target.value});
  };
  savePlaylist = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';

    const header = {
      headers: {
        Authorization: 'leo-christen-moreira'
      }
    };

    const body = {
      "name": this.state.playlistName
    };

    axios.post(url, body, header)
    .then((res) => {
      alert('Playlist adicionada');
    })
    .catch((err) => {alert(err.response.data.message)});
  };

  render() {
    return(
      <div>
        <CreatePlaylistForm
        changeListName={this.changeListName}
        savePlaylist={this.savePlaylist}
        />
      </div>
    );
  };
};

export default App;
