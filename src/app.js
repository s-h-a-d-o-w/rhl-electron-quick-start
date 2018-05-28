import React from 'react';
import RHLTest from './RHLTest';
import Introduction from './Introduction';
import {hot} from 'react-hot-loader';

const App = () => (
  <div>
    <h2>React Hot Loader Quick Start</h2>
    <Introduction />
    <RHLTest />
  </div>
);

export default hot(module)(App);
