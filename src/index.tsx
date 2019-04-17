// Lib
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// App
import './styles/bootstrap4-neon-glow.scss';
import App from './views/App';
import * as serviceWorker from './misc/serviceWorker';

ReactDOM.render(
  // https://github.com/facebook/create-react-app/issues/1765
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
