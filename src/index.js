import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {HashRouter} from 'react-router-dom';
import RootComponent from './components/RootComponent'

const element = <h2 className="testReact">Hey React!!</h2>;
ReactDOM.render(
  <HashRouter>
  <RootComponent></RootComponent></HashRouter>,
  document.getElementById('root')
);





