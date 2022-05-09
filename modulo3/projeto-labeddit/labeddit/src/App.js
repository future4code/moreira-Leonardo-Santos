import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router.js';
import './assets/css/reset.css';
import {PageWrap} from './style.js'
import Header from './components/Header/Header.js';

const App = () => {
  return (
    <PageWrap>
      <BrowserRouter>
          <Header/>
          <Router/>
      </BrowserRouter>
    </PageWrap>
  );
};

export default App;
