import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import CreatePlaylistForm from './components/CreatePlaylistForm/CreatePlaylistForm.js';

const List = styled.ul`
  border: 1px solid black;
`;

class App extends React.Component {

  state = {
    playlistName: '',
    showList: false,
    playlists: [],
    currentPage: 'addPlaylist',
    detailTitle: '',
    currentPlaylist: [],
    currentPlaylistId: '',
    currentPlaylistTracksNum: 0,
    newSongName: '',
    newSongArtist: '',
    newSongUrl: ''
    
  };

  changeListName = (evt) => {
    this.setState({playlistName: evt.target.value});
  };
  onChangeMusicName =(evt) => {
    this.setState({newSongName: evt.target.value});
  };
  onChangeMusicArtist =(evt) => {
    this.setState({});
  };
  onChangeMusicUrl =(evt) => {
    this.setState({});
  };
  getPlaylists = async () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';

    const header = {
      headers: {
        Authorization: "leo-christen-moreira"
      }
    };

    try {
      const res = await axios.get(url, header)
    
      this.setState({playlists: res.data.result.list});
    }
    catch(err) {
      console.log(err.response);
    }; 
    
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
    .catch((err) => {alert(err.response.data.message === 'There already is a playlist with a similiar name.' ? 'Esse nome já está sendo utilizado em outra Playlist' : 'Você precisa escolher um nome pra essa Playlist')});
  };
  delPlaylist = (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`;

    const header = {
      headers: {
        Authorization: "leo-christen-moreira"
      }
    };

    axios.delete(url, header)
    .then((res) => {
      alert('Playlist deletada com sucesso');
    })
    .catch((err) => {
      console.log(err.response);
    });
  };
  toggleList = () => {
    this.setState({showList: !this.state.showList});
  };
  openDetails = (id, name) => {
    if (this.state.currentPage === 'addPlaylist') {
      this.setState({currentPage: 'detailsPage', detailTitle: name, currentPlaylistId: id});
    }

    this.getPlaylistTracks(id)
  };
  getPlaylistTracks = async (id) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`;

    const header = {
      headers: {
        Authorization: "leo-christen-moreira"
      }
    };

    try {
      const res = await axios.get(url, header);
      this.setState({currentPlaylist: res.data.result.tracks, currentPlaylistTracksNum: res.data.result.quantity});
    }
    catch(err) {
      console.log(err.response);
    };
  };
  addTrackToPlaylist = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.currentPlaylistId}/tracks`;

    const body = {
      "name": this.state.newSongName,
      "artist": this.state.newSongArtist,
      "url": this.state.newSongUrl
    }

    const header = {
      headers: {
        Authorization: "leo-christen-moreira"
      }
    };

  };
  backToPlaylists = () => {
    this.setState({currentPage: 'addPlaylist'});
  }
  componentDidUpdate = () => {
    if (this.state.showList === true) {
      this.getPlaylists();
    }
  };
  
  render() {

    const changeButton = () => {
      switch (this.state.showList) {
        case false:
          return (<button type="button" onClick={this.toggleList}>Ver Playlists</button>);
      
        default:
          return (<button type="button" onClick={this.toggleList}>Esconder lista</button>);
      }
    }
    const savedPlaylists = this.state.playlists.map((playlist) => {
      return(
        <>
          <li key={playlist.id} onClick={() => {this.openDetails(playlist.id, playlist.name)}}>{playlist.name} </li><button type='button' onClick={() => {this.delPlaylist(playlist.id)}}>x</button>
        </>
      );
    });
    const playlistTracks = this.state.currentPlaylist.map((track) => {
      return(
        <li>
          <h4>{track.name}</h4>
          <p>{track.artist}</p>
        </li>
      );
    });

    const changePages = () => {
      switch (this.state.currentPage) {
        case 'addPlaylist':
          return(
            <>
              <CreatePlaylistForm
                changeListName={this.changeListName}
                savePlaylist={this.savePlaylist}
              />
              <div>
                {changeButton()}
                {this.state.showList ? <List>{savedPlaylists}</List> : null}
              </div>
            </>  
          );
        
        case 'detailsPage':  
          return(
            <>
              <h2>{this.state.detailTitle}</h2>
              <p>{`${this.state.currentPlaylistTracksNum} música(s)`}</p>
              <h3>adicionar música à playlist:</h3>
              <form>
                <label htmlFor="trackName">Qual é o nome da musica? </label>
                <input type="text" name='trackName'/>

                <label htmlFor="bandOrArtist">Qual é o nome da banda ou da pessoa cantora? </label>
                <input type="text" name='bandOrArtist'/>

                <label htmlFor="url">Qual é a URL da música? </label>
                <input type="text" name='url'/>

                <button type='button' onClick={this.addTrackToPlaylist}>Salvar música</button>
              </form>
              <hr />
              <List>{playlistTracks}</List>
              <button onClick={this.backToPlaylists}>Voltar</button>
            </>
          );

        default:
          return(<h2>Página não encontrada</h2>);
      }
    };

    return(
      <div>
        {changePages()}
      </div>
    );
  };
};

export default App;
