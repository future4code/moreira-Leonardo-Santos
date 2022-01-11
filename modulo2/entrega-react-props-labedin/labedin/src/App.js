import React from 'react';
import './App.css';
import CardPequeno from './components/CardPequeno';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import img from './assets/images/foto.jpg';
import logoNasa from './assets/images/logo-nasa.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={img} 
          nome="Leo" 
          descricao="Oi, eu sou a Leo e não estou muito no mood de escrever sobre mim."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div>
        <CardPequeno 
          imagem="https://cdn-icons.flaticon.com/png/512/3178/premium/3178158.png?token=exp=1641931179~hmac=ae709af577075111fd3fbeff73524daa"
          titulo="Email:"
          texto="meuEmail@aqueleMail.com"
        />
      </div>

      <div>
        <CardPequeno 
          imagem="https://cdn-icons-png.flaticon.com/512/535/535188.png"
          titulo="Endereço:"
          texto="Logo ali"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem={logoNasa} 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
