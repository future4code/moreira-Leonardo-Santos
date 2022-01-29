import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import CreatePlaylistForm from './components/CreatePlaylistForm/CreatePlaylistForm.js';

const Page = styled.div`
  text-align: center;
`;
const List = styled.ul`
  width: 85vw;
  margin: 2rem auto;
  border: 1px solid black; 
  box-sizing: border-box;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 0;

  div{
    width: 95%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem;
    border: 1px solid black;
    padding-right: 1rem;
    box-sizing: border-box;
  }

  li{
    width: 100%;
    text-align: start;
    padding: 1rem;
  }
`;
const Button = styled.button`
  margin-top: 2rem;
`;
const Div = styled.div`
  height: 30px;
  border: 1px black solid;
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
      console.log(res);
    })
    .catch((err) => {console.log(err.response)});
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
          return (<Button type="button" onClick={this.toggleList}>Ver Playlists</Button>);
      
        default:
          return (<Button type="button" onClick={this.toggleList}>Esconder lista</Button>);
      }
    };
    const savedPlaylists = this.state.playlists.map((playlist) => {
      return(
        <div>
          <li key={playlist.id} onClick={() => {this.openDetails(playlist.id, playlist.name)}}>{playlist.name} </li><button type='button' onClick={() => {this.delPlaylist(playlist.id)}}>x</button>
        </div>
      );
    });
    const playlistTracks = this.state.currentPlaylist.map((track) => {
      return(
        <Div>
          <h4>{track.name}</h4>
          <p>{track.artist}</p>
        </Div>
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
              <h2>{this.state.detailTitle}</h2>
              <p>{`${this.state.currentPlaylistTracksNum} música(s)`}</p>
              <h3>adicionar música à playlist:</h3>
              <form>
                <label htmlFor="trackName">Qual é o nome da musica? </label>
                <input type="text" name='trackName' value={this.state.newSongName} onChange={this.onChangeMusicName}/>

                <label htmlFor="bandOrArtist">Qual é o nome da banda ou da pessoa cantora? </label>
                <input type="text" name='bandOrArtist' value={this.state.newSongArtist} onChange={this.onChangeMusicArtist}/>

                <label htmlFor="url">Qual é a URL da música? </label>
                <input type="text" name='url' value={this.state.newSongUrl} onChange={this.onChangeMusicUrl}/>

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
      <Page>
        {changePages()}
      </Page>
    );
  };
};

export default App;
