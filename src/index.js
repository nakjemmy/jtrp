import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';


const domContainer = document.querySelector('#root');

if(domContainer){
    ReactDOM.render(<App />, domContainer);
}

const target = document.getElementById('jtrp-root');
const settings = window.JTRPSettings;

if (target) { ReactDOM.render(<App settings={settings}  />, target); }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
