import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Root from './shared/Root.js';
const basename = process.env.ROUTER_BASENAME || '/'

ReactDOM.render(
  <div className="ComponentContainer">
    <BrowserRouter basename={basename}>
      <Root />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);