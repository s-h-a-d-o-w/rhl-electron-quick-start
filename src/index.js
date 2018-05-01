import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';

const render = (Component) => {
  const App = require('./app').default;
  ReactDOM.render(<Component />, document.getElementById('app'));
  //ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('app'));
}

render(App);
if(module.hot) {
  module.hot.accept('./app.js', () => {
    render(App);
  });
}
