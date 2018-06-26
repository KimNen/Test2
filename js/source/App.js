import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Root from './shared/Root.js';

ReactDOM.render(
  <div className="ComponentContainer">
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);