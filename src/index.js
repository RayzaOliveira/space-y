import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes'

import './styles/global.css'

ReactDOM.render(
  <React.StrictMode>
    {/* levou <Home /> para dentro das rotas */}
    <Routes/>
  </React.StrictMode>,
  document.getElementById('root')
);

