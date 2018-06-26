import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import MainWindow from '../shared/MainWindow.js';

ReactDOM.render(
  <div className="ComponentContainer">
    <BrowserRouter>
      <MainWindow />
    </BrowserRouter>
  </div>,
  document.getElementById('root')
);