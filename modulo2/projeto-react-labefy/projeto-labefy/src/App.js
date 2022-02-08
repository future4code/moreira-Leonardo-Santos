import axios from 'axios';
import React from 'react';
import { Page, List, Button, ListItems } from './style.js';
import CreatePlaylistForm from './components/CreatePlaylistForm/CreatePlaylistForm.js';
import DetailsPage from './pages/DetailsPage/DetailsPage.js';

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
    this.setState({newSongArtist: evt.target.value});
  };
  onChangeMusicUrl =(evt) => {
    this.setState({newSongUrl: evt.target.value});
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

    this.setState({playlistName: ''});
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

    this.getPlaylistTracks(this.state.currentPlaylistId);

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

    axios.post(url, body, header)
    .then((res) => {
      alert('Música adicionada na playlist')
      console.log(res);
    })
    .catch((err) => {console.log(err.response)});

    this.setState({newSongName: '',newSongArtist: '',newSongUrl: ''});
  };
  removeSong = (songId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.currentPlaylistId}/tracks/${songId}`;

    const header = {
      headers: {
        Authorization: 'leo-christen-moreira'
      }
    };

    axios.delete(url, header)
    .then((res) => {
      alert('Música removida da Playlist')
    })
    .catch((err) => {console.log(err.response)})
  };
  backToPlaylists = () => {
    this.setState({currentPage: 'addPlaylist'});
  }
  componentDidUpdate = () => {
    if (this.state.showList === true) {
      this.getPlaylists();
    }

    if (this.state.currentPage === 'detailsPage') {
      this.getPlaylistTracks(this.state.currentPlaylistId)
    }
  };
  
  render() {

    const changeButton = () => {
      switch (this.state.showList) {
        case false:
          return (<Button type="button" onClick={this.toggleList}>Ver Playlists</Button>);
      
        default:
          return (<Button type="button" onClick={this.toggleList}>Esconder lista</Button>);
      }
    };
    const savedPlaylists = this.state.playlists.map((playlist) => {
      return(
        <ListItems key={playlist.id}>
          <li onClick={() => {this.openDetails(playlist.id, playlist.name)}}>{playlist.name} </li><button type='button' onClick={() => {this.delPlaylist(playlist.id)}}>x</button>
        </ListItems>
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
                inputValue={this.state.playlistName}
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
              <DetailsPage
                detailTitle={this.state.detailTitle}
                currentPlaylistTracksNum={this.state.currentPlaylistTracksNum}
                newSongName={this.state.newSongName}
                newSongArtist={this.state.newSongArtist}
                newSongUrl={this.state.newSongUrl}
                onChangeMusicName={this.onChangeMusicName}
                onChangeMusicArtist={this.onChangeMusicArtist}
                onChangeMusicUrl={this.onChangeMusicUrl}
                addTrackToPlaylist={this.addTrackToPlaylist}
                removeSong={this.removeSong}
                currentPlaylist={this.state.currentPlaylist}
                backToPlaylists={this.backToPlaylists}
              />
            </>
          );

        default:
          return(<h2>Página não encontrada</h2>);
      }
    };

    return(
      <Page>
        {changePages()}
      </Page>
    );
  };
};

export default App;