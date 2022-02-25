import React from 'react';
import Router from './routes/Router.js';
import './assets/css/reset.css';
import {PageWrap} from './style.js'

const App = () => {
  return (
    <PageWrap>
      <Router/>
    </PageWrap>
  );
};

export default App;
