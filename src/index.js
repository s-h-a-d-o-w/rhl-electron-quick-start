//import _ from 'lodash';
/*
import printMe from './print.js';
import SomethingElse from './somethingelse.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    //element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.innerHTML = 'Hello webpack';

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
document.body.appendChild(SomethingElse());


if(module.hot) {
    module.hot.accept();
}
*/

import React from 'react';
import ReactDOM from 'react-dom';

const render = () => {
  const App = require('./app').default;
  ReactDOM.render(<App />, document.getElementById('app'));
  //ReactDOM.render(<AppContainer><App /></AppContainer>, document.getElementById('App'));
}

render();
if (module.hot) {
  module.hot.accept(render);
}

